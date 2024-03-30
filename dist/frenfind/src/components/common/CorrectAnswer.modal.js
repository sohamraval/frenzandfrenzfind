"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorrectAnswerModal = void 0;
const gameContext_1 = require("../../context/gameContext");
const react_1 = require("react");
const spaceship_png_1 = __importDefault(require("../../assets/images/spaceship.png"));
const cloudpop_png_1 = __importDefault(require("../../assets/images/cloudpop.png"));
const item26s_png_1 = __importDefault(require("../../assets/images/item26s.png"));
const animejs_1 = __importDefault(require("animejs"));
const react_2 = require("react");
const soundContext_1 = require("../../context/soundContext");
const gameContext_2 = require("../../context/gameContext");
const questionsContext_1 = require("../../context/questionsContext");
const CorrectAnswerModal = () => {
    const { state, dispatch } = (0, react_1.useContext)(gameContext_1.GameContext);
    const soundContext = (0, react_1.useContext)(soundContext_1.SoundContext);
    const questionContext = (0, react_1.useContext)(questionsContext_1.QuestionContext);
    const correctAnswerRef = (0, react_2.createRef)();
    (0, react_1.useEffect)(() => {
        if (state.isCorrect) {
            (0, animejs_1.default)({
                targets: correctAnswerRef.current,
                translateY: ["-100%", "0%"],
                scale: [0, 1],
                duration: 400,
                easing: "linear",
            });
            soundContext.dispatch({ type: soundContext_1.SoundActions.PLAY_CORRECT_SOUND });
            setTimeout(() => {
                const exitAnimation = (0, animejs_1.default)({
                    targets: correctAnswerRef.current,
                    translateY: ["0%", "100%"],
                    scale: [1, 0],
                    duration: 400,
                    easing: "linear",
                });
                exitAnimation.finished.then(() => {
                    dispatch({ type: gameContext_2.GameActions.TOGGLE_CORRECT });
                });
            }, 2000);
        }
    }, [state.isCorrect]);
    if (!state.isCorrect)
        return null;
    return (<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full mx-auto h-full z-50 flex justify-center items-center">
      <div className="bg-blue-200/90 lg:px-20 lg:py-10 pb-4  px-10 rounded-2xl mt-10 relative" ref={correctAnswerRef}>
        <div className="flex flex-col lg:gap-5 gap-2 items-center justify-center relative">
          <div className="relative flex-1 lg:h-52 lg:w-52 h-28 w-28  z-50 grid place-items-center ">
            <div className="absolute " id="slide-up ">
              <div className="relative animate-bounce h-fit w-full">
                <img src={cloudpop_png_1.default} alt="" className=" object-contain aspect-auto "/>
                <span className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 lg:text-3xl text-base text-green-600 font-extrabold select-none">
                  +500
                </span>
              </div>
            </div>
          </div>
          <div>
            <img src={spaceship_png_1.default} alt="" className="object-contain lg:h-fit lg:w-fit h-20 w-28"/>
          </div>
          <div className="bg-white lg:p-5 p-2  rounded-full flex items-center justify-center flex-1 lg:h-fit lg:w-fit h-20 w-20">
            <img src={item26s_png_1.default} alt="" className="object-cover rounded-full h-full"/>
          </div>
          <div className="lg:p-4 bg-white w-full rounded-lg shadow-md text-center border-4 border-slate-600 flex-1">
            <span className="lg:text-xl text-base">
              {questionContext.state.answer}
            </span>
          </div>
        </div>
      </div>
    </div>);
};
exports.CorrectAnswerModal = CorrectAnswerModal;
//# sourceMappingURL=CorrectAnswer.modal.js.map
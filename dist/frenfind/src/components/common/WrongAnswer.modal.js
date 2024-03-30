"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WrongAnswerModal = void 0;
const gameContext_1 = require("../../context/gameContext");
const react_1 = require("react");
const WrongAnswerPicture_png_1 = __importDefault(require("../../assets/images/WrongAnswerPicture.png"));
const cloudpop_png_1 = __importDefault(require("../../assets/images/cloudpop.png"));
const animejs_1 = __importDefault(require("animejs"));
const react_2 = require("react");
const soundContext_1 = require("../../context/soundContext");
const WrongAnswerModal = () => {
    const { state, dispatch } = (0, react_1.useContext)(gameContext_1.GameContext);
    const soundContext = (0, react_1.useContext)(soundContext_1.SoundContext);
    const wrongModalRef = (0, react_2.createRef)();
    (0, react_1.useEffect)(() => {
        if (state.isWrong) {
            (0, animejs_1.default)({
                targets: wrongModalRef.current,
                translateY: ["-100%", "0%"],
                scale: [0, 1],
                duration: 300,
                easing: "linear",
            });
            soundContext.dispatch({ type: soundContext_1.SoundActions.PLAY_WRONG_SOUND });
            setTimeout(() => {
                const exitAnimation = (0, animejs_1.default)({
                    targets: wrongModalRef.current,
                    translateY: ["0%", "100%"],
                    scale: [1, 0],
                    duration: 300,
                    easing: "linear",
                });
                exitAnimation.finished.then(() => {
                    dispatch({ type: gameContext_1.GameActions.TOGGLE_WRONG });
                });
            }, 1500);
        }
    }, [state.isWrong]);
    if (!state.isWrong)
        return null;
    return (<div className="fixed top-1/2 left-1/2  h-full -translate-x-1/2 -translate-y-1/2  w-full mx-auto z-50 flex justify-center items-center">
      <div className="bg-blue-200/90 p-8 rounded-xl relative" ref={wrongModalRef}>
        <div className="lg:h-fit lg:w-fit h-36 w-36">
          <img src={WrongAnswerPicture_png_1.default} className="object-fit" alt=""/>
        </div>
        <div className="absolute lg:h-52 lg:w-52 h-28 w-28  z-50 grid place-items-center left-1/2 -translate-x-1/2">
          <div className="relative animate-bounce h-fit w-full">
            <img src={cloudpop_png_1.default} alt="" className=" object-contain aspect-auto "/>
            <span className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 lg:text-3xl text-base text-orange-600 font-extrabold select-none">
              +100
            </span>
          </div>
        </div>
      </div>
    </div>);
};
exports.WrongAnswerModal = WrongAnswerModal;
//# sourceMappingURL=WrongAnswer.modal.js.map
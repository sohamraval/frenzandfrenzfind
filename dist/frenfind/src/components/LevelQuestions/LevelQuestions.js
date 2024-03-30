"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelQuestions = void 0;
const react_1 = require("react");
const hi_1 = require("react-icons/hi");
const Hint_modal_1 = require("./Hint.modal");
const react_2 = require("react");
const gameContext_1 = require("../../context/gameContext");
const questionsContext_1 = require("../../context/questionsContext");
const LevelQuestions = ({ questions }) => {
    var _a, _b;
    const [questionIndex, setQuestionIndex] = (0, react_1.useState)(0);
    const [question, setQuestion] = (0, react_1.useState)(null);
    const [showHint, setShowHint] = (0, react_1.useState)(false);
    const showQuestionRef = (0, react_1.createRef)();
    const { dispatch } = (0, react_2.useContext)(gameContext_1.GameContext);
    const questionContext = (0, react_2.useContext)(questionsContext_1.QuestionContext);
    (0, react_1.useEffect)(() => {
        setQuestion(questions[questionIndex]);
        dispatch({
            type: gameContext_1.GameActions.SET_QUESTION,
            payload: questions[questionIndex],
        });
    }, [questionIndex, questions]);
    return (<div className="group bg-white hover:bg-white/70 w-[50px] aspect-square rounded-full hover:rounded-none bottom-2 animate-bounce  right-2 h-[50px] hover:w-dvw hover:px-10 hover:py-5 absolute hover:bottom-0 hover:right-0 hover:h-[80px] hover:animate-none" ref={showQuestionRef}>
      <span className="text-center text-2xl  group-hover:hidden font-extrabold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        ?
      </span>
      <div className="justify-between items-center hidden group-hover:flex">
        <h2 className="lg:text-2xl text-base font-extrabold">
          {((_a = questionContext.state.playedQuestions) === null || _a === void 0 ? void 0 : _a.length) - 1 || 0} - {(_b = questionContext.state.question) === null || _b === void 0 ? void 0 : _b.text}
        </h2>
        <div className="space-x-5">
          <div className="relative">
            <button onClick={() => setShowHint(!showHint)} className="text-4xl hover:text-yellow-500 hover:scale-105 transition-all">
              <hi_1.HiOutlineLightBulb />
            </button>
            {showHint && <Hint_modal_1.HintModal hint={(question === null || question === void 0 ? void 0 : question.hint) || ""}/>}
          </div>
        </div>
      </div>
    </div>);
};
exports.LevelQuestions = LevelQuestions;
//# sourceMappingURL=LevelQuestions.js.map
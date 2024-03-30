"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const GameOver_modal_1 = require("../components/GameOver.modal");
const LevelHeader_1 = __importDefault(require("../components/LevelHeader"));
const LevelQuestions_1 = require("../components/LevelQuestions/LevelQuestions");
const WelcomeGuide_1 = require("../components/WelcomeGuide");
const CorrectAnswer_modal_1 = require("../components/common/CorrectAnswer.modal");
const WrongAnswer_modal_1 = require("../components/common/WrongAnswer.modal");
const levels_1 = require("../constants/levels");
const gameContext_1 = require("../context/gameContext");
const questionsContext_1 = require("../context/questionsContext");
const shuffle_1 = require("../helpers/shuffle");
const LevelWrapper = () => {
    const { level } = (0, react_router_dom_1.useParams)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { state, dispatch } = (0, react_1.useContext)(gameContext_1.GameContext);
    const questionContext = (0, react_1.useContext)(questionsContext_1.QuestionContext);
    const imgRef = react_1.default.createRef();
    const [x, setX] = (0, react_1.useState)(0);
    const [y, setY] = (0, react_1.useState)(0);
    const [showWelcomeGuide, setWelcomeGuide] = (0, react_1.useState)(true);
    const [levelData, setLevelData] = (0, react_1.useState)(undefined);
    const handleAttachEventListener = (e) => {
        var _a;
        const { width, height } = e.target.getBoundingClientRect();
        const { offsetX, offsetY } = e.nativeEvent;
        setX(Math.round((((offsetX / width) * 100 - 10) / 80) * 100));
        setY(Math.round((((offsetY / height) * 100 - 5) / 90) * 53.3));
        const _x = Math.round((((offsetX / width) * 100 - 10) / 80) * 100);
        const _y = Math.round((((offsetY / height) * 100 - 5) / 90) * 53.3);
        //  const _x = -1000;
        // const _y = -1000;
        const positions = ((_a = state.question) === null || _a === void 0 ? void 0 : _a.answer.answerPositions) || [];
        let highestX = -1000;
        let highestY = -1000;
        let lowestX = 1000;
        let lowestY = 1000;
        //    let highestX = -1000;
        // let highestY = -1000;
        // let lowestX = -1000;
        // let lowestY = -1000;
        for (let i = 0; i < positions.length; i++) {
            if (positions[i][0] >= highestX) {
                highestX = positions[i][0];
                // highestX = -1000;
            }
            else if (positions[i][0] <= lowestX) {
                lowestX = positions[i][0];
                // lowestX = -1000;
            }
            if (positions[i][1] >= highestY) {
                highestY = positions[i][1];
                // highestY = -1000;
            }
            else if (positions[i][1] <= lowestY) {
                lowestY = positions[i][1];
                //  lowestY = -1000;
            }
        }
        let correct = false;
        if (_x < highestX && _y < highestY && _x > lowestX && _y > lowestY) {
            // if (_x == highestX && _y == highestY && _x == lowestX && _y == lowestY) {
            correct = true;
        }
        else {
            correct = false;
        }
        if (correct) {
            dispatch({ type: gameContext_1.GameActions.TOGGLE_CORRECT });
            questionContext.dispatch({
                type: questionsContext_1.QuestionActions.SET_ANSWERED_QUESTIONS,
                payload: state.question,
            });
            questionContext.dispatch({
                type: questionsContext_1.QuestionActions.SET_GET_TOTAL_QUESTIONS,
                payload: state.question.text,
            });
            state.score += 500;
        }
        else {
            dispatch({ type: gameContext_1.GameActions.TOGGLE_WRONG });
            questionContext.dispatch({
                type: questionsContext_1.QuestionActions.SET_MISSED_QUESTIONS,
                payload: state.question,
            });
            questionContext.dispatch({
                type: questionsContext_1.QuestionActions.SET_MISSED_TOTAL_QUESTIONS,
                payload: state.question.text,
            });
            if (state.score > 0) {
                state.score -= 100;
            }
        }
        const filteredQuestions = levelData === null || levelData === void 0 ? void 0 : levelData.questions.filter((_question) => _question.text !== questionContext.state.question.text);
        if ((filteredQuestions === null || filteredQuestions === void 0 ? void 0 : filteredQuestions.length) === 0) {
            if (questionContext.state.missedTotalquestionget.length ==
                questionContext.state.getquestion.length - 1) {
                navigate(`/level/${state.level}`);
            }
            else {
                dispatch({ type: gameContext_1.GameActions.SET_LEVEL, payload: state.level + 1 });
                navigate(`/level/${state.level + 1}`);
            }
        }
        setLevelData((prev) => {
            return Object.assign(Object.assign({}, prev), { questions: filteredQuestions || [] });
        });
        questionContext.dispatch({
            type: questionsContext_1.QuestionActions.SET_QUESTION,
            payload: (filteredQuestions === null || filteredQuestions === void 0 ? void 0 : filteredQuestions[0]) || null,
        });
    };
    (0, react_1.useEffect)(() => {
        var _a;
        const _levelData = levels_1.levels.find((_level) => _level.level === state.level);
        if (!_levelData) {
            dispatch({ type: gameContext_1.GameActions.EXIT_GAME });
            window.location.href = "/";
        }
        setLevelData(_levelData);
        questionContext.dispatch({
            type: questionsContext_1.QuestionActions.SET_QUESTION,
            payload: _levelData.questions[0],
        });
        questionContext.dispatch({
            type: questionsContext_1.QuestionActions.SET_ANSWER,
            payload: ((_a = questionContext.state.question) === null || _a === void 0 ? void 0 : _a.answer.text) || "",
        });
        console.log(questionContext.state);
        if (_levelData) {
            questionContext.dispatch({
                type: questionsContext_1.QuestionActions.GET_QUESTION,
                payload: _levelData.questions ? _levelData.questions : [],
            });
        }
        navigate(`/level/${state.level}`);
    }, [state.level]);
    // TODO: this should come from the server
    const levelBackgroundImage = (levelData === null || levelData === void 0 ? void 0 : levelData.backgroundImage.src) || "";
    console.log("questionContext.state", questionContext.state);
    return (<div className="relative bg-contain bg-no-repeat bg-top w-dvw h-dvh m-0 p-0 box-border ">
      <img src={levelBackgroundImage} alt="" className="object-cover absolute top-0 left-0 w-full h-full z-0" onClick={(e) => handleAttachEventListener(e)} useMap="#image-map" loading="eager" ref={imgRef}/>
      <LevelHeader_1.default />
      <react_router_dom_1.Outlet />
      {/* <GameOverModal /> */}
      {questionContext.state.getquestion &&
            questionContext.state.missedTotalquestionget &&
            questionContext.state.missedTotalquestionget.length >
                questionContext.state.getquestion.length - 1 && <GameOver_modal_1.GameOverModal />}

      <WrongAnswer_modal_1.WrongAnswerModal />
      <CorrectAnswer_modal_1.CorrectAnswerModal />
      {state.level === 1 && showWelcomeGuide && (<WelcomeGuide_1.WelcomeGuide onClose={() => setWelcomeGuide(!showWelcomeGuide)}/>)}
      <LevelQuestions_1.LevelQuestions questions={(0, shuffle_1.shuffle)((levelData === null || levelData === void 0 ? void 0 : levelData.questions) || [])}/>
    </div>);
};
exports.default = LevelWrapper;
//# sourceMappingURL=LevelWrapper.js.map
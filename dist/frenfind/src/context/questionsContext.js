"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionProvider = exports.QuestionContext = exports.QuestionActions = void 0;
const react_1 = require("react");
var QuestionActions;
(function (QuestionActions) {
    QuestionActions["SET_QUESTION"] = "SET_QUESTION";
    QuestionActions["GET_QUESTION"] = "GET_QUESTION";
    QuestionActions["SET_ANSWER"] = "SET_ANSWER";
    QuestionActions["SET_ANSWER_POSITION"] = "SET_ANSWER_POSITION";
    QuestionActions["SET_QUESTION_POSITION"] = "SET_QUESTION_POSITION";
    QuestionActions["SET_QUESTION_IMAGE"] = "SET_QUESTION_IMAGE";
    QuestionActions["SET_ANSWER_IMAGE"] = "SET_ANSWER_IMAGE";
    QuestionActions["CLEAR_QUESTION"] = "CLEAR_QUESTION";
    QuestionActions["SET_PLAYED_QUESTIONS"] = "SET_PLAYED_QUESTIONS";
    QuestionActions["SET_ANSWERED_QUESTIONS"] = "SET_ANSWERED_QUESTIONS";
    QuestionActions["SET_MISSED_QUESTIONS"] = "SET_MISSED_QUESTIONS";
    QuestionActions["SET_MISSED_TOTAL_QUESTIONS"] = "SET_MISSED_TOTAL_QUESTIONS";
    QuestionActions["SET_GET_TOTAL_QUESTIONS"] = "SET_GET_TOTAL_QUESTIONS";
    QuestionActions["SET_EMPTY_MISSED_TOTAL_QUESTIONS"] = "SET_EMPTY_MISSED_TOTAL_QUESTIONS";
    QuestionActions["SET_EMPTY_GET_TOTAL_QUESTIONS"] = "SET_EMPTY_GET_TOTAL_QUESTIONS";
})(QuestionActions || (exports.QuestionActions = QuestionActions = {}));
exports.QuestionContext = (0, react_1.createContext)({
    state: {
        question: null,
        getquestion: null,
        playedQuestions: [],
        answeredQuestions: [],
        missedQuestions: [],
        missedTotalquestionget: [],
        getTotalquestion: [],
        answer: "",
        questionPosition: [],
        answerPosition: [],
        questionImage: "",
        answerImage: "",
    },
    dispatch: () => null,
});
const questionReducer = (state, action) => {
    switch (action.type) {
        case QuestionActions.SET_QUESTION:
            console.log(action.payload);
            return Object.assign(Object.assign({}, state), { question: action.payload, playedQuestions: [
                    ...(state.playedQuestions || []),
                    action.payload,
                ] });
        case QuestionActions.GET_QUESTION:
            return Object.assign(Object.assign({}, state), { getquestion: action.payload });
        case QuestionActions.SET_ANSWER:
            return Object.assign(Object.assign({}, state), { answer: action.payload });
        case QuestionActions.SET_ANSWER_POSITION:
            return Object.assign(Object.assign({}, state), { answerPosition: action.payload });
        case QuestionActions.SET_QUESTION_POSITION:
            return Object.assign(Object.assign({}, state), { questionPosition: action.payload });
        case QuestionActions.SET_QUESTION_IMAGE:
            return Object.assign(Object.assign({}, state), { questionImage: action.payload });
        case QuestionActions.SET_ANSWER_IMAGE:
            return Object.assign(Object.assign({}, state), { answerImage: action.payload });
        case QuestionActions.SET_PLAYED_QUESTIONS:
            return Object.assign(Object.assign({}, state), { playedQuestions: action.payload });
        case QuestionActions.SET_ANSWERED_QUESTIONS:
            return Object.assign(Object.assign({}, state), { answeredQuestions: action.payload });
        case QuestionActions.SET_MISSED_QUESTIONS:
            return Object.assign(Object.assign({}, state), { missedQuestions: action.payload });
        case QuestionActions.SET_MISSED_TOTAL_QUESTIONS:
            return Object.assign(Object.assign({}, state), { missedTotalquestionget: state.missedTotalquestionget.concat(action.payload) });
        case QuestionActions.SET_EMPTY_MISSED_TOTAL_QUESTIONS:
            return Object.assign(Object.assign({}, state), { missedTotalquestionget: action.payload });
        case QuestionActions.SET_GET_TOTAL_QUESTIONS:
            return Object.assign(Object.assign({}, state), { getTotalquestion: state.getTotalquestion.concat(action.payload) });
        case QuestionActions.SET_EMPTY_GET_TOTAL_QUESTIONS:
            return Object.assign(Object.assign({}, state), { getTotalquestion: action.payload });
        case QuestionActions.CLEAR_QUESTION:
            return {
                question: null,
                getquestion: null,
                answer: "",
                playedQuestions: [],
                answeredQuestions: [],
                missedQuestions: [],
                missedTotalquestionget: [],
                getTotalquestion: [],
                questionPosition: [],
                answerPosition: [],
                questionImage: "",
                answerImage: "",
            };
        default:
            return state;
    }
};
const QuestionProvider = ({ children }) => {
    const [state, dispatch] = (0, react_1.useReducer)(questionReducer, {
        question: null,
        getquestion: null,
        answer: "",
        playedQuestions: [],
        answeredQuestions: [],
        missedQuestions: [],
        missedTotalquestionget: [],
        getTotalquestion: [],
        questionPosition: [],
        answerPosition: [],
        questionImage: "",
        answerImage: "",
    });
    const value = (0, react_1.useMemo)(() => ({ state, dispatch }), [state, dispatch]);
    return (<exports.QuestionContext.Provider value={value}>
      {children}
    </exports.QuestionContext.Provider>);
};
exports.QuestionProvider = QuestionProvider;
//# sourceMappingURL=questionsContext.js.map
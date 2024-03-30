"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameProvider = exports.gameReducer = exports.GameContext = exports.GameActions = void 0;
const react_1 = require("react");
const backgroundSound_mp3_1 = __importDefault(require("../assets/sounds/backgroundSound.mp3"));
var GameActions;
(function (GameActions) {
    GameActions["TOGGLE_LEADERBOARD"] = "TOGGLE_LEADERBOARD";
    GameActions["INIT_GAME"] = "INIT_GAME";
    GameActions["START_GAME"] = "START_GAME";
    GameActions["EXIT_GAME"] = "EXIT_GAME";
    GameActions["PAUSE_GAME"] = "PAUSE_GAME";
    GameActions["RESUME_GAME"] = "RESUME_GAME";
    GameActions["FINISH_GAME"] = "FINISH_GAME";
    GameActions["WIN_GAME"] = "WIN_GAME";
    GameActions["LOSE_GAME"] = "LOSE_GAME";
    GameActions["SET_LEVEL"] = "SET_LEVEL";
    GameActions["SET_SCORE"] = "SET_SCORE";
    GameActions["SET_TIMEPLAYED"] = "SET_TIMEPLAYED";
    GameActions["TOGGLE_MUSIC"] = "TOGGLE_MUSIC";
    GameActions["TOGGLE_WRONG"] = "TOGGLE_WRONG";
    GameActions["TOGGLE_CORRECT"] = "TOGGLE_CORRECT";
    GameActions["SET_QUESTION"] = "SET_QUESTION";
})(GameActions || (exports.GameActions = GameActions = {}));
const initialState = {
    isGameInitialized: false,
    isLeaderboardVisible: false,
    level: 1,
    levelDuration: 600,
    score: 0,
    timeplayed: 0,
    isGamePaused: false,
    isGameStarted: false,
    isGameFinished: false,
    question: null,
    isGameWon: false,
    isGameLost: false,
    isMusicOn: false,
    isWrong: false,
    isCorrect: false,
    dispatch: () => null,
};
exports.GameContext = (0, react_1.createContext)({
    state: initialState,
    dispatch: () => null,
});
const gameReducer = (state, action) => {
    switch (action.type) {
        case GameActions.INIT_GAME:
            return Object.assign(Object.assign({}, state), { isGameInitialized: true });
        case GameActions.TOGGLE_LEADERBOARD:
            return Object.assign(Object.assign({}, state), { isLeaderboardVisible: !state.isLeaderboardVisible });
        case GameActions.START_GAME:
            return Object.assign(Object.assign({}, state), { isGameStarted: true });
        case GameActions.EXIT_GAME:
            return Object.assign(Object.assign({}, state), { isGameStarted: false });
        case GameActions.PAUSE_GAME:
            return Object.assign(Object.assign({}, state), { isGamePaused: true });
        case GameActions.RESUME_GAME:
            return Object.assign(Object.assign({}, state), { isGamePaused: false });
        case GameActions.FINISH_GAME:
            return Object.assign(Object.assign({}, state), { isGameFinished: true, level: 1, score: 0 });
        case GameActions.WIN_GAME:
            return Object.assign(Object.assign({}, state), { isGameWon: true });
        case GameActions.LOSE_GAME:
            return Object.assign(Object.assign({}, state), { isGameLost: true });
        case GameActions.SET_LEVEL:
            return Object.assign(Object.assign({}, state), { level: action.payload });
        case GameActions.SET_SCORE:
            return Object.assign(Object.assign({}, state), { score: action.payload });
        case GameActions.SET_TIMEPLAYED:
            return Object.assign(Object.assign({}, state), { timeplayed: action.payload });
        case GameActions.TOGGLE_MUSIC:
            return Object.assign(Object.assign({}, state), { isMusicOn: !state.isMusicOn });
        case GameActions.TOGGLE_WRONG:
            return Object.assign(Object.assign({}, state), { isWrong: !state.isWrong });
        case GameActions.TOGGLE_CORRECT:
            return Object.assign(Object.assign({}, state), { isCorrect: !state.isCorrect });
        case GameActions.SET_QUESTION:
            return Object.assign(Object.assign({}, state), { question: action.payload });
        default:
            return state;
    }
};
exports.gameReducer = gameReducer;
const GameProvider = ({ children }) => {
    const [state, dispatch] = (0, react_1.useReducer)(exports.gameReducer, initialState);
    (0, react_1.useEffect)(() => {
        const audio = new Audio(backgroundSound_mp3_1.default);
        audio.loop = true;
        if (state.isMusicOn === true) {
            audio.play();
        }
        return () => {
            audio.pause();
        };
    }, [state, dispatch]);
    const value = (0, react_1.useMemo)(() => {
        return { state, dispatch };
    }, [state, dispatch]);
    return <exports.GameContext.Provider value={value}>{children}</exports.GameContext.Provider>;
};
exports.GameProvider = GameProvider;
//# sourceMappingURL=gameContext.js.map
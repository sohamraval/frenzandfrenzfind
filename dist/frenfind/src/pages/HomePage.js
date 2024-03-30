"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const na_png_1 = __importDefault(require("../assets/images/na.png"));
const oscoret_png_1 = __importDefault(require("../assets/images/oscoret.png"));
const titleq_png_1 = __importDefault(require("../assets/images/titleq.png"));
const gameContext_1 = require("../context/gameContext");
const questionsContext_1 = require("../context/questionsContext");
const soundContext_1 = require("../context/soundContext");
const HomePage = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    // const { dispatch } = useContext(GameContext);
    const soundContext = (0, react_1.useContext)(soundContext_1.SoundContext);
    const { state, dispatch } = (0, react_1.useContext)(gameContext_1.GameContext);
    const questionContext = (0, react_1.useContext)(questionsContext_1.QuestionContext);
    const handleStartGame = () => {
        dispatch({ type: gameContext_1.GameActions.START_GAME });
        // questionContext.dispatch({type:QuestionActions.SET_MISSED_TOTAL_QUESTIONS,payload: []})
        //   questionContext.dispatch({type:QuestionActions.SET_GET_TOTAL_QUESTIONS,payload: []})  
        questionContext.dispatch({ type: questionsContext_1.QuestionActions.SET_EMPTY_MISSED_TOTAL_QUESTIONS, payload: [] });
        questionContext.dispatch({ type: questionsContext_1.QuestionActions.SET_EMPTY_GET_TOTAL_QUESTIONS, payload: [] });
        // soundContext?.dispatch({ type: SoundActions.MUSIC_ON });
        navigate("/level/1");
    };
    return (<div className="">
      <img src={oscoret_png_1.default} className="absolute top-5 left-5"/>
      <img src={na_png_1.default} className="absolute top-0 left-40"/>
      <react_router_dom_1.Link to="/leaderboard" className="absolute cursor-pointer top-14 left-1/2 -translate-x-1/2 uppercase bg-white shadow-inner rounded-2xl py-1 px-5 hover:scale-[1.02] transition-all text-xl font-bold">
        leaderBoard
      </react_router_dom_1.Link>
      <img src={titleq_png_1.default} className="absolute top-[75%] left-1/2 -translate-x-1/2  "/>
      <button className="absolute cursor-pointer top-[82%] left-1/2 -translate-x-1/2  uppercase bg-white shadow-inner rounded-2xl py-1 px-5 hover:scale-[1.02] transition-all text-xl font-bold" onClick={() => handleStartGame()}>
        Connect your wallet
      </button>
      <div className="flex gap-2 absolute bottom-10 text-white font-bold text-xl right-10">
        <a className="hover:text-teal-200">About</a>
        <span>|</span>
        <a className="hover:text-teal-200">Privacy</a>
      </div>
    </div>);
};
exports.default = HomePage;
//# sourceMappingURL=HomePage.js.map
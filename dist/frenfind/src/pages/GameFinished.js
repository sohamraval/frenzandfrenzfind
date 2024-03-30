"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameFinished = void 0;
const moment_1 = __importDefault(require("moment"));
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const gameContext_1 = require("../context/gameContext");
const GameFinished = () => {
    const { dispatch, state } = (0, react_1.useContext)(gameContext_1.GameContext);
    const handleGameFinished = () => {
        dispatch({ type: gameContext_1.GameActions.FINISH_GAME });
    };
    return (<div className="h-full w-full grid place-items-center">
      <div className="flex items-center justify-between  max-w-3xl w-full">
        <div className="flex items-center justify-center gap-3">
          <span className="text-3xl text-white font-extrabold">Time</span>
          <div className="text-black font-extrabold text-3xl bg-white/70 px-4 p-1 rounded-full">
            {moment_1.default.utc(state.timeplayed * 1000).format("mm:ss")}
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <span className="text-3xl text-white font-extrabold">Degen</span>
          <div className="text-black font-extrabold text-3xl bg-white/70 px-4 p-1 rounded-full">
            #1
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <p className="text-center text-7xl text-white font-extrabold">
          Total Score
        </p>
        <p className="text-center text-7xl text-blue-400 font-extrabold">
          {state.score}
        </p>
      </div>
      <react_router_dom_1.Link to="/" onClick={() => handleGameFinished} className=" uppercase bg-white shadow-inner rounded-2xl py-1 px-5 hover:scale-[1.02] transition-all text-xl font-bold">
        Play Again
      </react_router_dom_1.Link>
    </div>);
};
exports.GameFinished = GameFinished;
//# sourceMappingURL=GameFinished.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameOverModal = void 0;
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const gameContext_1 = require("../context/gameContext");
const GameOverModal = () => {
    const { state, dispatch } = (0, react_1.useContext)(gameContext_1.GameContext);
    console.log("state", state);
    // if (!state.isGameFinished) return null;
    return (<div className="fixed top-0 left-0 w-full h-full bg-black/90 z-50 flex justify-center items-center">
      <div className="bg-white/90 w-4/5 h-4/5 rounded-xl py-8 px-24">
        <p className="text-center text-4xl font-['Lato'] text font-[900] uppercase tracking-wide text-teal-700/90">
          Game Over
        </p>
        <div className="flex flex-col items-center justify-center gap-4">
          <button className="w-0 h-0 
                        hover:scale-[1.1] transition-all
                        shadow-inner 
                        border-l-[20px] border-l-transparent
                        border-b-[50px] border-b-amber-600/90
                        border-r-[20px] border-r-transparent" onClick={() => {
            console.log("clicked");
        }}></button>
          <button className="w-0 h-0 
                        border-l-[20px] border-l-transparent
                        shadow-inner 
                        hover:scale-[1.1] transition-all
                        border-t-[50px] border-t-amber-600/90
                        border-r-[20px] border-r-transparent"></button>
        </div>
        <div className="absolute bottom-4 right-1/2 translate-x-1/2">
          <react_router_dom_1.Link className="bg-white rounded-xl py-1 px-16 hover:scale-[1.02] transition-all text-2xl shadow-inner uppercase font-bold " to={"/"}>
            back
          </react_router_dom_1.Link>
        </div>
      </div>
    </div>);
};
exports.GameOverModal = GameOverModal;
//# sourceMappingURL=GameOver.modal.js.map
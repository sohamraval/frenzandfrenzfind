"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaderBoardTile = void 0;
const cup_png_1 = __importDefault(require("../assets/images/cup.png"));
const badge_png_1 = __importDefault(require("../assets/images/badge.png"));
const moment_1 = __importDefault(require("moment"));
const LeaderBoardTile = ({ rank, name, score, id, found, timeplayed, }) => {
    return (<div className="bg-teal-600/95 py-[6px] rounded-2xl">
      <div className="flex justify-between items-center px-10">
        <div className="flex items-center gap-4 justify-between text-lg w-full">
          <img src={cup_png_1.default} alt="cup" className="w-10"/>
          <span className="text-amber-300 text-2xl font-['Lato'] font-[900]">
            {rank}
          </span>
          <div className="relative bg-white rounded-xl  h-[60px] flex  w-[120px]  items-center ">
            <div className="absolute aspect-square -top-[6.5px] -left-4">
              <div className="rounded-full bg-teal-600/90   p-1 absolute">
                <div className="rounded-full p-1 grid place-items-center  relative h-[65px] w-[65px]  bg-white ">
                  <div className="rounded-full aspect-square bg-white p">
                    <span className="text-black text-xs text-center">
                      <p>Twitter</p>
                      <p>avatar</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <img src={badge_png_1.default} alt="" className=" absolute right-6 float-right"/>
          </div>
          <div>
            <p>Score: {score || " - "}</p>
          </div>
          <div>
            <p>Found: {found || " - "}</p>
          </div>
          <div>
            <p>Time: {moment_1.default.utc(timeplayed * 1000).format("HH:mm:ss")}</p>
          </div>
          <div className="flex items-center gap-3">
            <p>ID: {id}</p>
            <span className="p-2 bg-amber-400 rounded-full aspect-square h-5"></span>
          </div>
        </div>
      </div>
    </div>);
};
exports.LeaderBoardTile = LeaderBoardTile;
//# sourceMappingURL=LeaderborardTile.js.map
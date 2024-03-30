"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const LeaderborardTile_1 = require("../components/LeaderborardTile");
const LeaderBoard_service_1 = __importDefault(require("../services/LeaderBoard.service"));
const LeaderBoard = () => {
    const [leaderBoardInfos, setLeaderBoardInfos] = (0, react_1.useState)([]);
    const [totalLeaderboardList, setTotalLeaderboardList] = (0, react_1.useState)([]);
    const [pageNo, setPageNo] = (0, react_1.useState)(0);
    const [rank, setRank] = (0, react_1.useState)(1);
    const leaderBoardRef = (0, react_1.createRef)();
    const leaderBoardService = new LeaderBoard_service_1.default();
    const getLeaderBoardInfos = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield leaderBoardService.getLeaderBoardInfos();
            setTotalLeaderboardList(result.data);
            // setLeaderBoardInfos(result.data);
        }
        catch (error) {
            console.error(error);
        }
    });
    (0, react_1.useEffect)(() => {
        const startIndex = pageNo * 5;
        const endIndex = startIndex + 5;
        setLeaderBoardInfos(totalLeaderboardList.slice(startIndex, endIndex));
        const startRank = pageNo * 5 + 1;
        setRank(startRank);
    }, [totalLeaderboardList, pageNo]);
    (0, react_1.useEffect)(() => {
        getLeaderBoardInfos();
    }, []);
    return (<div className=' transition-all absolute grid place-items-center bg-[url("./assets/images/endscr.png")] z-50 max-h-7xl h-full top-0  w-full max-w-8xl '>
      <div className="transition-all relative max-h-7xl bg-white/70 max-w-7xl w-full h-4/5  rounded-xl py-8 px-24" ref={leaderBoardRef}>
        <div>
          <p className="text-center text-4xl font-['Lato'] text font-[900] uppercase tracking-wide text-teal-700/90">
            leader board
          </p>
          <div className="flex flex-col gap-4 mt-5 text-white font-bold">
            {leaderBoardInfos &&
            (leaderBoardInfos === null || leaderBoardInfos === void 0 ? void 0 : leaderBoardInfos.map((info, index) => (<LeaderborardTile_1.LeaderBoardTile key={index} 
            // rank={index + 1}
            rank={rank + index} name={info.name} score={info.score} id={info.twitter_id} found={info.found} timeplayed={info.time_played}/>)))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 absolute top-1/2 right-5 -translate-y-1/2">
          <button className="w-0 h-0 
                      hover:scale-[1.1] transition-all
                      shadow-inner 
                      border-l-[20px] border-l-transparent
                      border-b-[50px] border-b-amber-600/90
                      border-r-[20px] border-r-transparent" onClick={() => setPageNo(prevPageNo => Math.max(prevPageNo - 1, 0))}></button>
          <button className="w-0 h-0 
                    border-l-[20px] border-l-transparent
                    shadow-inner 
                    hover:scale-[1.1] transition-all
                    border-t-[50px] border-t-amber-600/90
                    border-r-[20px] border-r-transparent" 
    //           onClick={() => {
    //    setPageNo(p => p + 1)
    // }}
    //  onClick={() => setPageNo(prevPageNo => prevPageNo + 1)}
    onClick={() => {
            if ((pageNo + 1) * 5 < totalLeaderboardList.length) {
                setPageNo(prevPageNo => prevPageNo + 1);
            }
        }}></button>
        </div>

        <div className="absolute bottom-4 right-1/2 translate-x-1/2">
          <react_router_dom_1.Link className="bg-white rounded-xl py-1 px-16 hover:scale-[1.02] transition-all text-2xl shadow-inner uppercase font-bold " to={"/"}>
            back
          </react_router_dom_1.Link>
        </div>
      </div>
    </div>);
};
exports.default = LeaderBoard;
//# sourceMappingURL=LeaderBoard.js.map
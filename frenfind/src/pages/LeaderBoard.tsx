import { FC, createRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LeaderBoardTile } from "../components/LeaderborardTile";
import LeaderBoardService from "../services/LeaderBoard.service";

const LeaderBoard: FC = () => {
  const [leaderBoardInfos, setLeaderBoardInfos] = useState<any[]>([]);
  const [totalLeaderboardList, setTotalLeaderboardList] = useState<any[]>([])
  const [pageNo, setPageNo] = useState(0);
  const[rank,setRank]=useState(1);
  const leaderBoardRef = createRef<HTMLDivElement>();

  const leaderBoardService = new LeaderBoardService();

  const getLeaderBoardInfos = async () => {
    try {
      const result = await leaderBoardService.getLeaderBoardInfos();
      setTotalLeaderboardList(result.data)
      // setLeaderBoardInfos(result.data);
    } catch (error) {
      console.error(error);
    }
  };
   useEffect(() => {
    const startIndex = pageNo * 5;
    const endIndex = startIndex + 5;
    setLeaderBoardInfos(totalLeaderboardList.slice(startIndex, endIndex));
     const startRank = pageNo * 5 + 1;
      setRank(startRank);    
  }, [totalLeaderboardList, pageNo]);

  useEffect(() => {
    getLeaderBoardInfos();
  }, []);

  return (
    <div className=' transition-all absolute grid place-items-center bg-[url("./assets/images/endscr.png")] z-50 max-h-7xl h-full top-0  w-full max-w-8xl '>
      <div
        className="transition-all relative max-h-7xl bg-white/70 max-w-7xl w-full h-4/5  rounded-xl py-8 px-24"
        ref={leaderBoardRef}
      >
        <div>
          <p className="text-center text-4xl font-['Lato'] text font-[900] uppercase tracking-wide text-teal-700/90">
            leader board
          </p>
          <div className="flex flex-col gap-4 mt-5 text-white font-bold">
            {leaderBoardInfos &&
              leaderBoardInfos?.map((info, index) => (
                
                <LeaderBoardTile
                  key={index}
                  // rank={index + 1}
                  rank={rank + index}
                  name={info.name}
                  score={info.score}
                  id={info.twitter_id}
                  found={info.found}
                  timeplayed={info.time_played}
                />
              ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 absolute top-1/2 right-5 -translate-y-1/2">
          <button
            className="w-0 h-0 
                      hover:scale-[1.1] transition-all
                      shadow-inner 
                      border-l-[20px] border-l-transparent
                      border-b-[50px] border-b-amber-600/90
                      border-r-[20px] border-r-transparent"

             onClick={() => setPageNo(prevPageNo => Math.max(prevPageNo - 1, 0))}
          ></button>
          <button
            className="w-0 h-0 
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
                       }}
          ></button>
        </div>

        <div className="absolute bottom-4 right-1/2 translate-x-1/2">
          <Link
            className="bg-white rounded-xl py-1 px-16 hover:scale-[1.02] transition-all text-2xl shadow-inner uppercase font-bold "
            to={"/"}
          >
            back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;

import CupIcon from "../assets/images/cup.png";

import Badge from "../assets/images/badge.png";

import { FC } from "react";
import moment from "moment";

interface LeaderBoardTileProps {
  rank?: number;
  name?: string;
  score: number;
  id: string;
  found: number;
  timeplayed: number;
}

export const LeaderBoardTile: FC<LeaderBoardTileProps> = ({
  rank,
  name,
  score,
  id,
  found,
  timeplayed,
}) => {
  return (
    <div className="bg-teal-600/95 py-[6px] rounded-2xl">
      <div className="flex justify-between items-center px-10">
        <div className="flex items-center gap-4 justify-between text-lg w-full">
          <img src={CupIcon} alt="cup" className="w-10" />
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
            <img src={Badge} alt="" className=" absolute right-6 float-right" />
          </div>
          <div>
            <p>Score: {score || " - "}</p>
          </div>
          <div>
            <p>Found: {found || " - "}</p>
          </div>
          <div>
            <p>Time: {moment.utc(timeplayed * 1000).format("HH:mm:ss")}</p>
          </div>
          <div className="flex items-center gap-3">
            <p>ID: {id}</p>
            <span className="p-2 bg-amber-400 rounded-full aspect-square h-5"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

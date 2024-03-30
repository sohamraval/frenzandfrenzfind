"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const io_1 = require("react-icons/io");
const io5_1 = require("react-icons/io5");
const tb_1 = require("react-icons/tb");
const react_router_dom_1 = require("react-router-dom");
const tweeter_jpg_1 = __importDefault(require("../assets/images/tweeter.jpg"));
const gameContext_1 = require("../context/gameContext");
const questionsContext_1 = require("../context/questionsContext");
const soundContext_1 = require("../context/soundContext");
const useTimer_1 = require("../hooks/useTimer");
const LevelHeader = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    let number = 600;
    const { timer, timeUp } = (0, useTimer_1.useTimer)(number);
    const { state, dispatch } = (0, react_1.useContext)(gameContext_1.GameContext);
    const soundContext = (0, react_1.useContext)(soundContext_1.SoundContext);
    const questionContext = (0, react_1.useContext)(questionsContext_1.QuestionContext);
    const _timers = timer.split(":");
    const times = parseInt(_timers[0]) * 60 + parseInt(_timers[1]);
    let totaltime = number - times;
    const handleExitGame = () => {
        dispatch({ type: gameContext_1.GameActions.EXIT_GAME });
        soundContext === null || soundContext === void 0 ? void 0 : soundContext.dispatch({ type: soundContext_1.SoundActions.MUSIC_OFF });
        navigate("/");
    };
    // const handlePauseGame = () => {
    //   console.log("pause game");
    // };
    // const handleStopGame = () => {
    //   console.log("stop game");
    // };
    const handleMusic = () => {
        soundContext === null || soundContext === void 0 ? void 0 : soundContext.dispatch({ type: soundContext_1.SoundActions.TOGGLE_MUSIC });
    };
    const logintweeter = () => {
        const object = {
            score: state.score,
            time_played: totaltime,
            total_right: questionContext.state.getTotalquestion.length ? questionContext.state.getTotalquestion.length : "",
        };
        fetch('https://frenfind-6b3d86bd2f7d.herokuapp.com/api/twitter-auth-url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(object)
        })
            .then(response => {
            return response.json();
        }).then(data => {
            window.location.href = data.url;
        })
            .catch(error => {
            console.error('Error:', error);
        });
    };
    (0, react_1.useEffect)(() => {
        if (timeUp === true) {
            navigate("/game-finished");
        }
    }, [timeUp]);
    (0, react_1.useEffect)(() => {
        // convert time to secondsisGameFinished
        if (state.isGameFinished) {
            const _timer = timer.split(":");
            const time = parseInt(_timer[0]) * 60 + parseInt(_timer[1]);
            console.log("time", time);
            dispatch({ type: gameContext_1.GameActions.SET_TIMEPLAYED, payload: time });
        }
    }, [state.isGameFinished]);
    return (
    // <div className="bg-white/70 w-dvw px-10 py-2  absolute top-0 ">
    <div className="group bg-white hover:bg-white/70 lg:w-[130px] w-[100px] rounded-full hover:rounded-none top-2  left-2 lg:h-[40px] h-[30px] hover:w-dvw hover:px-10 hover:py-3 absolute hover:top-0 hover:left-0 hover:h-max">
      <span className="text-center text-2xl group-hover:hidden font-extrabold absolute top-1 right-1/2 translate-x-1/2 ">
        <div className="flex items-center justify-center gap-3">
          <span className="text-black font-extrabold lg:text-2xl text-base">
            {/* {moment.utc(time * 1000).format("mm:ss")} */}
            {timer}
          </span>
          <tb_1.TbListDetails />
        </div>
      </span>
      <div className=" hidden group-hover:flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <div className="flex gap-4 items-center">
            <io_1.IoIosTimer size={30} className="text-black font-extrabold lg:text-2xl text-base"/>
            <span className="text-black font-extrabold lg:text-2xl text-base">
              {timer}
            </span>
          </div>
          <div className="text-black font-extrabold lg:text-2xl text-base">
            level: {state.level}
          </div>
             {state.level === 2 && (<div>
            <img src={tweeter_jpg_1.default} height={30} width={30} onClick={logintweeter}/>
          </div>)}

        </div>
        <div className="flex items-center gap-5 justify-center">
          <div className="lg:h-16 h-10 lg:w-14 w-8 bg-blue-400 rounded-lg -skew-x-6"></div>
          <div className="lg:h-16 h-10 lg:w-14 w-8 bg-blue-400 rounded-lg -skew-x-6"></div>
          <div className="lg:h-16 h-10 lg:w-14 w-8 bg-blue-400 rounded-lg -skew-x-6"></div>
          <div className="lg:h-16 h-10 lg:w-14 w-8 bg-blue-400 rounded-lg -skew-x-6"></div>
          <div className="lg:h-16 h-10 lg:w-14 w-8 bg-blue-400 rounded-lg -skew-x-6"></div>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-black font-extrabold lg:text-2xl text-base">
            Score:{"  "} {state.score} {"  "}{" "}
            
          </span>
          
          <div className="flex items-center gap-5">
            {/* <button className="p-3 hover:bg-teal-200/80 aspect-square rounded-full shadow-sm lg:text-2xl text-base">
          <MdMotionPhotosPause />
        </button>
        <button className="p-3 hover:bg-teal-200/80 aspect-square rounded-full shadow-sm lg:text-2xl text-base">
          <CiStop1 />
        </button> */}
            <button onClick={handleMusic} className="p-3 hover:bg-teal-200/80 aspect-square rounded-full shadow-sm lg:text-2xl text-base">
              {soundContext.state.isMusicOn ? <tb_1.TbMusic /> : <tb_1.TbMusicOff />}
            </button>
            <button onClick={handleExitGame} className="p-3 hover:bg-teal-200/80 aspect-square rounded-full shadow-sm lg:text-2xl text-base">
              <io5_1.IoExitOutline />
            </button>
          </div>
        </div>
      </div>
    </div>);
};
exports.default = LevelHeader;
//# sourceMappingURL=LevelHeader.js.map
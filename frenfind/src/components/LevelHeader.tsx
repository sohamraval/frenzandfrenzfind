import { FC, useContext, useEffect, useRef, useState } from "react";
import { BsGearFill } from "react-icons/bs";
import { IoIosTimer } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import { TbListDetails, TbMusic, TbMusicOff } from "react-icons/tb";

import { useNavigate } from "react-router-dom";
import Question from "../../src/interfaces/Question.interface";
import mytweeteri from "../assets/images/tweeter.jpg";
import { GameActions, GameContext } from "../context/gameContext";
import { QuestionActions, QuestionContext } from "../context/questionsContext";
import { SoundActions, SoundContext } from "../context/soundContext";
import { useTimer } from "../hooks/useTimer";


interface LevelQuestionsProps {
  twiiterModal:Boolean;
  SetTwiiterModal:(time:Boolean) => void;
  removeQuestion: () => void;
  showTime:Boolean;
  setShowTime:(time:Boolean) => void;
}

const LevelHeader: FC<LevelQuestionsProps> = ({twiiterModal,SetTwiiterModal,removeQuestion,showTime,setShowTime}) => {

  const Ref = useRef<any>(null);
  const navigate = useNavigate();
  const [questiontimer, setquestionTimer] = useState("00:00");
  const [questiontimeUp, setquestionTimeUp] = useState(false);
const getTimeRemaining = (e: string) => {
    const total = Date.parse(e) - Date.parse(new Date().toString());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return {
      total,
      minutes,
      seconds,
    };
  };

  const startquestionTimer = (e: any) => {
    let { total, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setquestionTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    } else {
      setquestionTimeUp(true);
    }
  };
  let number=600;
  const clearTimer = (e: Date) => {
    setquestionTimer("00:00")
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startquestionTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 60);
    return deadline;
  };
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);
  useEffect(()=>{
    if(showTime){
      setShowTime(false)
      clearTimer(getDeadTime())      
    }
  },[showTime])
  const { timer, timeUp } = useTimer(number);
  // const{questiontimer,questiontimeUp}=useQuestionTimer(questiontimernumber);
  // console.log(questiontimer,"TIMER")
  const { state, dispatch } = useContext(GameContext);
  const soundContext = useContext(SoundContext);
  const questionContext = useContext(QuestionContext);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [question, setQuestion] = useState<Question | null>(null);
  const[nextQuestion,setNextQuestion]=useState<boolean>(true);
   
  const [time, setTime] = useState(number);
  const [prevQuestions, setPrevQuestions] = useState(questionContext.state.getquestion);
  const _timers = timer.split(":");
  const times = parseInt(_timers[0]) * 60 + parseInt(_timers[1]);
  let totaltime=number-times;
  
  const handleExitGame = () => {
    dispatch({ type: GameActions.EXIT_GAME });
    soundContext?.dispatch({ type: SoundActions.MUSIC_OFF });
    navigate("/");
  };  
  // const handlePauseGame = () => {
  //   console.log("pause game");
  // };
     
  // const handleStopGame = () => {
  //   console.log("stop game");
  // };
  // console.log("questionContext*",questionContext.state.getquestion)

  const handleMusic = () => {
    soundContext?.dispatch({ type: SoundActions.TOGGLE_MUSIC });
  };

   const logintweeter=()=>{
    const object={
        score:state.score,
        time_played:totaltime,
        total_right:questionContext.state.getTotalquestion.length?questionContext.state.getTotalquestion.length:"",
        callbackurl:'/level/2'
     }
     fetch('https://frenfind-6b3d86bd2f7d.herokuapp.com/api/twitter-auth-url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(object)
    })
    .then(response => {
        return response.json();
    }).then(data=>{
      window.location.href=data.url
    })
    .catch(error => {
        console.error('Error:', error);
    });
  }

  useEffect(() => {
    if (timeUp === true) {
        questionContext.dispatch({
        type: QuestionActions.SET_TOTAL_TIME,
        payload:number,
      });
      navigate("/game-finished");
    }
  }, [timeUp]);

  useEffect(() => {
  if(twiiterModal)
  {
       questionContext.dispatch({
        type: QuestionActions.SET_TAKEN_TIME,
        payload:totaltime,
      });
      SetTwiiterModal(false)
  }
  }, [twiiterModal]);
  
  useEffect(() => {
      // console.log("questions",questions)
    if(questiontimeUp){
    // setQuestion(questions[questionIndex]);
    // dispatch({
    //   type: GameActions.SET_QUESTION,
    //   payload: questions[questionIndex] as any,
    // });
    //  dispatch({
    //   type: GameActions.SET_QUESTION,
    //   payload: questions[questionIndex] as any,
    // });
      removeQuestion();
      clearTimer(getDeadTime())
      setquestionTimeUp(false);
      setNextQuestion(true)
      // setQuestionIndex(prevIndex => prevIndex + 1);
    }
  }, [questiontimeUp,questionIndex, question]);



  useEffect(() => {
    // convert time to secondsisGameFinished
    if (state.isGameFinished) {
      const _timer = timer.split(":");
      const time = parseInt(_timer[0]) * 60 + parseInt(_timer[1]);
      console.log("time",time)
      dispatch({ type: GameActions.SET_TIMEPLAYED, payload: time });
    }
  }, [state.isGameFinished]);

  return (
    // <div className="bg-white/70 w-dvw px-10 py-2  absolute top-0 ">
    <div className="group bg-white hover:bg-white/70 lg:w-[170px] w-[100px] rounded-full hover:rounded-none top-2  left-3 lg:h-[42px] h-[30px] hover:w-dvw hover:px-10 hover:py-3 absolute hover:top-0 hover:left-0 hover:h-max">
      <span className="text-center text-2xl group-hover:hidden font-extrabold absolute top-1 right-1/2 translate-x-1/2 ">
        <div className="flex items-center justify-center gap-3">
          <span className="text-black font-extrabold lg:text-2xl text-base">
            {/* {moment.utc(time * 1000).format("mm:ss")} */}
            {timer}
          </span>
          <TbListDetails />
           <div style={{ borderRight: '4px solid black', height: '25px' }}></div>
          <BsGearFill />
        </div>

 {/* <div className="flex items-center justify-center gap-3">
          <span className="text-black font-extrabold lg:text-2xl text-base">
            {questiontimer}
          </span>
          <TbListDetails />
        </div>
        */}
           {/* <div className="flex items-center justify-center gap-3">
          <span className="text-black font-extrabold lg:text-2xl text-base">
            {timerperquestion}
          </span>
          <TbListDetails />
        </div> */}

      </span>
      <div className=" hidden group-hover:flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <div className="flex gap-4 items-center">
            <IoIosTimer
              size={30}
              className="text-black font-extrabold lg:text-2xl text-base"
            />
            <span className="text-black font-extrabold lg:text-2xl text-base">
              {timer}
            </span>
          </div>
          <div className="text-black font-extrabold lg:text-2xl text-base">
            level: {state.level}
          </div>
             {state.level === 2 && ( 
          <div>
            <img src={mytweeteri} height={30} width={30} onClick={logintweeter}/>
          </div>
        )}

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
            <button
              onClick={handleMusic}
              className="p-3 hover:bg-teal-200/80 aspect-square rounded-full shadow-sm lg:text-2xl text-base"
            >
              {soundContext.state.isMusicOn ? <TbMusic /> : <TbMusicOff />}
            </button>
            <button
              onClick={handleExitGame}
              className="p-3 hover:bg-teal-200/80 aspect-square rounded-full shadow-sm lg:text-2xl text-base"
            >
              <IoExitOutline />
            </button>
          </div>
        </div>
      </div>
            {/* <LevelWrapper  /> */}
            {/* {(showleveltwo) && (
              <TwitterModal onClose={() => setLeveltwo(!showleveltwo)} totalTime={totaltime}  />
            ) } */}
    </div>
  );
};

export default LevelHeader;

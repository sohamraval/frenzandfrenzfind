import moment from "moment";
import { FC, useContext } from "react";
import { GameActions, GameContext } from "../context/gameContext";
import { QuestionContext } from "../context/questionsContext";



export const GameFinished: FC = () => {
  const { dispatch, state } = useContext(GameContext);
    const questionContext = useContext(QuestionContext);
  // const navigate = useNavigate();
  console.log("jdjd",questionContext)
  const handleGameFinished = () => {
    
    dispatch({ type: GameActions.FINISH_GAME });

     console.log("sjs",state.score)
     console.log("xx",questionContext.state.totaltime)
    // const object={
    //     score:state.score,
    //     time_played:"",
    //     total_right:questionContext.state.getTotalquestion.length?questionContext.state.getTotalquestion.length:"",
    //  }

     const object={
        score:state.score,
        time_played:questionContext.state.totaltime,
        total_right:questionContext.state.getTotalquestion.length,
        callbackurl:''
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
      console.log("data",data)
      window.location.href=data.url
    })
    .catch(error => {
        console.error('Error:', error);
    });
  
  };

  return (
    <div className="h-full w-full grid place-items-center">
      <div className="flex items-center justify-between  max-w-3xl w-full">
        <div className="flex items-center justify-center gap-3">
          <span className="text-3xl text-white font-extrabold">Time</span>
          <div className="text-black font-extrabold text-3xl bg-white/70 px-4 p-1 rounded-full">
            {moment.utc(state.timeplayed * 1000).format("mm:ss")}
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
      <button
        // to="/"
        onClick={handleGameFinished}
        className=" uppercase bg-white shadow-inner rounded-2xl py-1 px-5 hover:scale-[1.02] transition-all text-xl font-bold"
      >
        Play Again
      </button>
    </div>
  );
};

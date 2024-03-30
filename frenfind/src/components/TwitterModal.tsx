import anime from "animejs";
import { FC, createRef, useContext, useEffect } from "react";
// import { GameContext } from "../context/gameContext";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../context/gameContext";
import { QuestionContext } from "../context/questionsContext";


interface TwitterModalProps {
  onClose: () => void;
  // totalTime:number;
  //  onOk: () => void;
}
export const TwitterModal: FC<TwitterModalProps> = ({ onClose }) => {
  const guideRef = createRef<HTMLDivElement>();
    const questionContext = useContext(QuestionContext);
      const navigate = useNavigate();


    
     const { state, dispatch } = useContext(GameContext);


     console.log("questionContext",questionContext)

   useEffect(() => {
    anime({
      targets: guideRef.current,
      translateY: ["0%", "0%"],
      scale: [0, 1],
      duration: 300,
      easing: "linear",
    });
  });
  
  const handleOkClick = () => {
    
    console.log("hi")
    //  dispatch({ type: GameActions.SET_LEVEL, payload: state.level + 1 });
                // navigate(`/level/${state.level + 1}`);
    // Perform the fetch request
    const object = {
      score: state.score,
      time_played: questionContext.state.takentime,
      total_right: questionContext.state.getTotalquestion.length
        ? questionContext.state.getTotalquestion.length
        : "",
        callbackurl:'/level/2'
    };  
    console.log("obj",object)

    // fetch("http://localhost:8000/api/twitter-auth-url", {
      fetch("https://frenfind-6b3d86bd2f7d.herokuapp.com/api/twitter-auth-url",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    })
      .then((response) => {
        console.log("res",response)
        return response.json();
      })
      .then((data) => {
        
        console.log("data", data);
        window.location.href = data.url;
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
          onClose(); // Close the modal

  };


  return (
    <div className="bg-black/40 h-dvh w-dvw fixed  grid place-items-center">
      <div
        className="lg:p-10 px-5 py-4  bg-blue-300/90 text-slate-800 rounded-3xl lg:leading-10 text-center lg:text-3xl lg:max-w-xl max-w-xs w-full mx-auto lg:space-y-7 space-y-2 font-extrabold"
        ref={guideRef}
      >
        
        <p>Are you want to Tweet?</p>
        <button
          // onClick={onClose}
           onClick={handleOkClick}
          className="bg-amber-400 lg:text-lg text-sm px-3 py-1 rounded-md font-extrabold hover:scale-[1.07] transition-all"
        >
          OK
        </button>
      </div>
    </div>
  );
};

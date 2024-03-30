import { GameContext } from "../../context/gameContext";
import { useContext, useEffect } from "react";
import Spaceship from "../../assets/images/spaceship.png";
import Cloud from "../../assets/images/cloudpop.png";
import FacePic from "../../assets/images/item26s.png";
import anime from "animejs";
import { createRef } from "react";
import { SoundContext, SoundActions } from "../../context/soundContext";
import { GameActions } from "../../context/gameContext";
import {
  QuestionActions,
  QuestionContext,
} from "../../context/questionsContext";

export const CorrectAnswerModal = () => {
  const { state, dispatch } = useContext(GameContext);
  const soundContext = useContext(SoundContext);
  const questionContext = useContext(QuestionContext);
  const correctAnswerRef = createRef<HTMLDivElement>();

  useEffect(() => {
    if (state.isCorrect) {
      anime({
        targets: correctAnswerRef.current,
        translateY: ["-100%", "0%"],
        scale: [0, 1],
        duration: 400,
        easing: "linear",
      });

      soundContext.dispatch({ type: SoundActions.PLAY_CORRECT_SOUND });

      setTimeout(() => {
        const exitAnimation = anime({
          targets: correctAnswerRef.current,
          translateY: ["0%", "100%"],
          scale: [1, 0],
          duration: 400,
          easing: "linear",
        });

        exitAnimation.finished.then(() => {
          dispatch({ type: GameActions.TOGGLE_CORRECT });
        });
      }, 2000);
    }
  }, [state.isCorrect]);

  if (!state.isCorrect) return null;
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full mx-auto h-full z-50 flex justify-center items-center">
      <div
        className="bg-blue-200/90 lg:px-20 lg:py-10 pb-4  px-10 rounded-2xl mt-10 relative"
        ref={correctAnswerRef}
      >
        <div className="flex flex-col lg:gap-5 gap-2 items-center justify-center relative">
          <div className="relative flex-1 lg:h-52 lg:w-52 h-28 w-28  z-50 grid place-items-center ">
            <div className="absolute " id="slide-up ">
              <div className="relative animate-bounce h-fit w-full">
                <img
                  src={Cloud}
                  alt=""
                  className=" object-contain aspect-auto "
                />
                <span className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 lg:text-3xl text-base text-green-600 font-extrabold select-none">
                  +500
                </span>
              </div>
            </div>
          </div>
          <div>
            <img
              src={Spaceship}
              alt=""
              className="object-contain lg:h-fit lg:w-fit h-20 w-28"
            />
          </div>
          <div className="bg-white lg:p-5 p-2  rounded-full flex items-center justify-center flex-1 lg:h-fit lg:w-fit h-20 w-20">
            <img
              src={FacePic}
              alt=""
              className="object-cover rounded-full h-full"
            />
          </div>
          <div className="lg:p-4 bg-white w-full rounded-lg shadow-md text-center border-4 border-slate-600 flex-1">
            <span className="lg:text-xl text-base">
              {questionContext.state.answer}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

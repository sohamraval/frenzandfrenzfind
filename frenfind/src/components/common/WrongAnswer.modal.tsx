import anime from "animejs";
import { createRef, useContext, useEffect } from "react";
import WrongPicture from "../../assets/images/WrongAnswerPicture.png";
import Cloud from "../../assets/images/cloudpop.png";
import { GameActions, GameContext } from "../../context/gameContext";
import { SoundActions, SoundContext } from "../../context/soundContext";

export const WrongAnswerModal = () => {
  const { state, dispatch } = useContext(GameContext);
  const soundContext = useContext(SoundContext);

  const wrongModalRef = createRef<HTMLDivElement>();
  useEffect(() => {
    if (state.isWrong) {
      anime({
        targets: wrongModalRef.current,
        translateY: ["-100%", "0%"],
        scale: [0, 1],
        duration: 300,
        easing: "linear",
      });

      soundContext.dispatch({ type: SoundActions.PLAY_WRONG_SOUND });

      setTimeout(() => {
        const exitAnimation = anime({
          targets: wrongModalRef.current,
          translateY: ["0%", "100%"],
          scale: [1, 0],
          duration: 300,
          easing: "linear",
        });

        exitAnimation.finished.then(() => {
          dispatch({ type: GameActions.TOGGLE_WRONG });
        });
      }, 1500);
    }
  }, [state.isWrong]);

  if (!state.isWrong) return null;

  return (
    <div className="fixed top-1/2 left-1/2  h-full -translate-x-1/2 -translate-y-1/2  w-full mx-auto z-50 flex justify-center items-center">
      <div
        className="bg-blue-200/90 p-8 rounded-xl relative"
        ref={wrongModalRef}
      >
        <div className="lg:h-fit lg:w-fit h-36 w-36">
          <img src={WrongPicture} className="object-fit" alt="" />
        </div>
        <div className="absolute lg:h-52 lg:w-52 h-28 w-28  z-50 grid place-items-center left-1/2 -translate-x-1/2">
          <div className="relative animate-bounce h-fit w-full">
            <img src={Cloud} alt="" className=" object-contain aspect-auto " />
            <span className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 lg:text-3xl text-base text-orange-600 font-extrabold select-none">
              -100
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

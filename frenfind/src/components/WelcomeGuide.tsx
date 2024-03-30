import { FC, createRef, useEffect } from "react";
import anime from "animejs";

interface WelcomeGuideProps {
  onClose: () => void;
}
export const WelcomeGuide: FC<WelcomeGuideProps> = ({ onClose }) => {
  const guideRef = createRef<HTMLDivElement>();

  useEffect(() => {
    anime({
      targets: guideRef.current,
      translateY: ["0%", "0%"],
      scale: [0, 1],
      duration: 300,
      easing: "linear",
    });
  });

  return (
    <div className="bg-black/40 h-dvh w-dvw fixed  grid place-items-center">
      <div
        className="lg:p-10 px-5 py-4  bg-blue-300/90 text-slate-800 rounded-3xl lg:leading-10 text-center lg:text-3xl lg:max-w-xl max-w-xs w-full mx-auto lg:space-y-7 space-y-2 font-extrabold"
        ref={guideRef}
      >
        <p>Fren Find</p> <p>How degen are you?</p>
        <p>
          Answer the questions to find your “frenz” and level up your score.
          Search around and click on an object if you know the answer.
        </p>{" "}
        <p>Are you degen enough to make the allowlist?</p>
        <button
          onClick={onClose}
          className="bg-amber-400 lg:text-lg text-sm px-3 py-1 rounded-md font-extrabold hover:scale-[1.07] transition-all"
        >
          OK
        </button>
      </div>
    </div>
  );
};

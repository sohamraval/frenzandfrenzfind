import { useEffect, useRef, useState } from "react";

export const useQuestionTimer = (duration: number) => {
  const Ref = useRef<any>(null);

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

      // setTimerperquestion(  (minutes > 9 ? minutes : "0" + minutes) +
      //     ":" +
      //     (seconds > 9 ? seconds : "0" + seconds))
    //  setTimerperquestion("01:00");
    
        // setTimerperquestion("01:00");

    } else {
      setquestionTimeUp(true);
    }
  };

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
    deadline.setSeconds(deadline.getSeconds() + duration);
    return deadline;
  };
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  return { questiontimer, questiontimeUp  };
};

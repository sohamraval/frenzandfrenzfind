import { useEffect, useRef, useState } from "react";

export const useTimer = (duration: number) => {
  const Ref = useRef<any>(null);

  const [timer, setTimer] = useState("00:00");
    // const [resettimer, setresetTimer] = useState("00:00");
  const [timeUp, setTimeUp] = useState(false);

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

  const startTimer = (e: any) => {
    let { total, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
      // setresetTimer((minutes > 9 ? minutes : "0" + minutes) +
      //     ":" +
      //     (seconds > 9 ? seconds : "0" + seconds))

    } else {
      setTimeUp(true);
    }
  };

  const clearTimer = (e: Date) => {
    setTimer("00:00");
    // setresetTimer("00:00");

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
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

  return { timer, timeUp  };
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTimer = void 0;
const react_1 = require("react");
const useTimer = (duration) => {
    const Ref = (0, react_1.useRef)(null);
    const [timer, setTimer] = (0, react_1.useState)("00:00");
    const [timeUp, setTimeUp] = (0, react_1.useState)(false);
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date().toString());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        return {
            total,
            minutes,
            seconds,
        };
    };
    const startTimer = (e) => {
        let { total, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            setTimer((minutes > 9 ? minutes : "0" + minutes) +
                ":" +
                (seconds > 9 ? seconds : "0" + seconds));
        }
        else {
            setTimeUp(true);
        }
    };
    const clearTimer = (e) => {
        setTimer("00:00");
        if (Ref.current)
            clearInterval(Ref.current);
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
    (0, react_1.useEffect)(() => {
        clearTimer(getDeadTime());
    }, []);
    return { timer, timeUp };
};
exports.useTimer = useTimer;
//# sourceMappingURL=useTimer.js.map
import cn from "classnames";
import styles from "./timerWrapper.module.scss";
import Button from "../button/Button";
import Timer from "../timer/Timer";
import { useEffect, useRef, useState } from "react";

const formatTime = (timer) => {
  const getSeconds = `0${timer % 60}`.slice(-2);
  const minutes = `${Math.floor(timer / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};

export default function TimerWrapper() {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [history, setHistory] = useState([]);
  const timerRef = useRef(0);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    timerRef.current = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [isRunning, seconds]);

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    clearInterval(timerRef.current);
  };

  const handleInterval = () => {
    setHistory((prev) => [...prev, seconds]);
  };

  return (
    <div className={cn(styles[`timer-wrapper`])}>
      <div className={cn(styles[`timer-wrapper__list`])}>
        {history.map((sec) => (
          <Timer text={formatTime(sec)} />
        ))}
      </div>
      <div className={cn(styles[`timer-wrapper__main-timer`])}>
        <span className={cn(styles[`timer-wrapper__count`])}>{formatTime(seconds)}</span>
      </div>
      <div className={cn(styles[`timer-wrapper__control`])}>
        <Button use="start" text="start" handler={() => setIsRunning(true)} />
        <Button use="stop" text="stop" handler={() => setIsRunning(false)} />
        <Button use="interval" text="interval" handler={handleInterval} />
        <Button use="reset" text="reset" handler={handleReset} />
      </div>
    </div>
  );
}

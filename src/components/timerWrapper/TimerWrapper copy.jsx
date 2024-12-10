import cn from "classnames";
import styles from "./timerWrapper.module.scss";
import Button from "../button/Button";
import Timer from "../timer/Timer";
import { useEffect, useRef, useState } from "react";

export default function TimerWrapper() {
  const [isRunning, setIsRunning] = useState(false);
  const [miliSeconds, setMiliSeconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const timerRef = useRef(0);

  //  проблемы:
  //  значение удваивается из=за стрикт мода
  //  как передать разный интервал и использовать его? стейты должны быть в дочке?

  // //states
  const setStateMiliSeconds = () => {
    setMiliSeconds((prev) => {
      if (prev === 59) {
        setStateSeconds();
        return 0;
      }
      return prev + 1;
    });
  };

  const setStateSeconds = () => {
    setSeconds((prev) => {
      if (prev === 59) {
        setStateMinutes();
        return 0;
      }
      return prev + 1;
    });
  };

  const setStateMinutes = () => {
    setMinutes((prev) => {
      return prev + 1;
    });
  };

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setStateMiliSeconds();
      }, 10);
    } else if (!isRunning) {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  //handlers
  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const handleStop = () => {
    if (isRunning) {
      setIsRunning(false);
    }
  };

  const handleInterval = () => {};

  const handleReset = () => {
    setIsRunning(false);
    setMiliSeconds(0);
    setSeconds(0);
    setMinutes(0);
  };

  return (
    <div className={cn(styles[`timer-wrapper`])}>
      <div className={cn(styles[`timer-wrapper__list`])}>
        <div className={cn(styles[`timer-wrapper__mini-timer`])}>
          <Timer miliSeconds={miliSeconds} seconds={seconds} minutes={minutes} />
        </div>
        <div className={cn(styles[`timer-wrapper__mini-timer`])}>
          <Timer miliSeconds={miliSeconds} seconds={seconds} minutes={minutes} />
        </div>
        <div className={cn(styles[`timer-wrapper__mini-timer`])}>
          <Timer miliSeconds={miliSeconds} seconds={seconds} minutes={minutes} />
        </div>
        <div className={cn(styles[`timer-wrapper__mini-timer`])}>
          <Timer miliSeconds={miliSeconds} seconds={seconds} minutes={minutes} />
        </div>
        <div className={cn(styles[`timer-wrapper__mini-timer`])}>
          <Timer miliSeconds={miliSeconds} seconds={seconds} minutes={minutes} />
        </div>
      </div>
      <div className={cn(styles[`timer-wrapper__main-timer`])}>
        <Timer miliSeconds={miliSeconds} seconds={seconds} minutes={minutes} />
      </div>
      <div className={cn(styles[`timer-wrapper__control`])}>
        <div className={cn(styles[`timer-wrapper__btn`])}>
          <Button use="start" text="start" handler={handleStart} />
        </div>
        <div className={cn(styles[`timer-wrapper__btn`])}>
          <Button use="stop" text="stop" handler={handleStop} />
        </div>
        <div className={cn(styles[`timer-wrapper__btn`])}>
          <Button use="interval" text="interval" handler={handleInterval} />
        </div>
        <div className={cn(styles[`timer-wrapper__btn`])}>
          <Button use="reset" text="reset" handler={handleReset} />
        </div>
      </div>
    </div>
  );
}

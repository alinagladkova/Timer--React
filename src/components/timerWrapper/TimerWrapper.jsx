import cn from "classnames";
import styles from "./timerWrapper.module.scss";
import Button from "../button/Button";

export default function TimerWrapper() {
  return (
    <div className={cn(styles[`timer-wrapper`])}>
      <div className={cn(styles[`timer-wrapper__list`])}></div>
      <div className={cn(styles[`timer-wrapper__main-timer`])}></div>
      <div className={cn(styles[`timer-wrapper__control`])}>
        <div className={cn(styles[`timer-wrapper__btn`])}>
          <Button use="start" text="start" />
        </div>
        <div className={cn(styles[`timer-wrapper__btn`])}>
          <Button use="stop" text="stop" />
        </div>
        <div className={cn(styles[`timer-wrapper__btn`])}>
          <Button use="interval" text="interval" />
        </div>
        <div className={cn(styles[`timer-wrapper__btn`])}>
          <Button use="reset" text="reset" />
        </div>
      </div>
    </div>
  );
}

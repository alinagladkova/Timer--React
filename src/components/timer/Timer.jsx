import cn from "classnames";
import styles from "./timer.module.scss";

export default function Timer({ miliSeconds, seconds, minutes }) {
  return (
    <p className={cn(styles.timer)}>{`${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(2, "0")} : ${String(miliSeconds).padStart(2, "0")}`}</p>
  );
}

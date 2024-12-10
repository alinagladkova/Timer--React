import cn from "classnames";
import styles from "./timer.module.scss";

export default function Timer({ text }) {
  return <p className={cn(styles.timer)}>{text}</p>;
}

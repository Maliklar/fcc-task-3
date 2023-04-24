import { ReactNode } from "react";
import styles from "./index.module.scss";

type Props = {
  id: string;
  children: ReactNode;
};
const Button = ({ id, children }: Props) => {
  return (
    <button className={`${styles.container} drum-pad`} id={id}>
      {children}
    </button>
  );
};
export default Button;

import { ReactNode, FC } from "react";
import classes from "./Card.module.css";

type Props = {
  children: ReactNode;
  className?: string;
};

const Card: FC<Props> = (props) => {
  return (
    <div
      className={`${classes.card} ${props.className}`}
      data-testid="container"
    >
      {props.children}
    </div>
  );
};

export default Card;

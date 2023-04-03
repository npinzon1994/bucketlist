import { FC } from "react";
import classes from "./ListItem.module.css";

type Props = { description: string; year: number };

const ListItem: FC<Props> = (props) => {
  return (
    <li className={classes["list-item"]}>
      <span>{props.description}</span>
      <span>{props.year}</span>
    </li>
  );
};

export default ListItem;

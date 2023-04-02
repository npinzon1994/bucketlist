import { FC, useState } from "react";
import classes from "./ListItem.module.css";
import DeleteIconButton from "./DeleteIconButton";

type Props = { description: string; year: number };

const ListItem: FC<Props> = (props) => {
  const [showDeleteButton, setShowDeleteButton] = useState<Boolean>(false);

  const showDeleteButtonHandler = () => {
    setShowDeleteButton(true);
  };

  const hideDeleteButtonHandler = () => {
    setShowDeleteButton(false);
  };

  return (
    <li
      className={classes["list-item"]}
      onMouseEnter={showDeleteButtonHandler}
      onMouseLeave={hideDeleteButtonHandler}
    >
      <span>{props.description}</span>
      <span>{props.year}</span>
      <DeleteIconButton />
    </li>
  );
};

export default ListItem;

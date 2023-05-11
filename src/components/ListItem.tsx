import { FC, MouseEvent, useState } from "react";
import classes from "./ListItem.module.css";
import DeleteIcon from "./DeleteIcon";

type Props = {
  description: string;
  year: number;
  id: string;
  onRemove: (id: string) => void;
};

const ListItem: FC<Props> = (props) => {
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  function deleteItem() {
    console.log(props.id);
    props.onRemove(props.id);
  }

  return (
    <li
      className={classes["list-item"]}
      onMouseEnter={() => setShowDeleteButton(true)}
      onMouseLeave={() => setShowDeleteButton(false)}
      onClick={deleteItem}
    >
      <span>{props.description}</span>
      <span>{props.year}</span>
      {showDeleteButton && <DeleteIcon />}
    </li>
  );
};

export default ListItem;

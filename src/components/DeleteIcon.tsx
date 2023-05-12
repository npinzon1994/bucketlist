import classes from "./DeleteIcon.module.css";
import { ReactComponent as Icon } from "../assets/red-delete.svg";

const DeleteIcon = () => {
  return (
      <Icon className={classes.icon} />
  );
};

export default DeleteIcon;

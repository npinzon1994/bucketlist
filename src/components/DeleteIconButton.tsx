import React from "react";
import classes from "./DeleteIconButton.module.css";
import { ReactComponent as DeleteIcon } from "../assets/red-delete.svg";

const DeleteIconButton = () => {
  return (
    <button className={classes.button}>
      <DeleteIcon className={classes.icon} />
    </button>
  );
};

export default DeleteIconButton;

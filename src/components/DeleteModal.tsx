import React from "react";
import Modal from "react-modal";
import classes from "./DeleteModal.module.css";
import { ReactComponent as BigDeleteIcon } from "../assets/red-delete-big.svg";
import { ReactComponent as Cross } from "../assets/cross.svg";

const modalStyles = {
  overlay: { backgroundColor: "rgba(0, 0, 0, 0.8)" },
  content: {
    maxWidth: "24rem",
    maxHeight: "16rem",
    minWidth: "288px",
    top: "35%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    padding: "0",
    display: "grid",
    placeItems: "center",
  },
};

// Set the app root element for the modal
Modal.setAppElement("#root");

export type DeleteModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  onDelete: () => void;
};

const DeleteModal: React.FC<DeleteModalProps> = ({
  isOpen,
  onRequestClose,
  onDelete,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Delete Confirmation Modal"
      style={modalStyles}
    >
      <Cross className={classes.cross} onClick={onRequestClose}/>
      <BigDeleteIcon className={classes["delete-icon"]} />
      <h2 className={classes.title}>Delete Goal?</h2>
      <p className={classes.description}>This action cannot be undone.</p>
      <div className={classes["button-div"]}>
        <button onClick={onRequestClose} className={classes["cancel-button"]}>
          Cancel
        </button>
        <button onClick={onDelete} className={classes["delete-button"]}>
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default DeleteModal;

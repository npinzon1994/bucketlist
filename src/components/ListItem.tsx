import { FC, useState } from "react";
import classes from "./ListItem.module.css";
import DeleteIcon from "./DeleteIcon";
import DeleteModal, {DeleteModalProps} from "./DeleteModal";

type Props = {
  description: string;
  year: number;
  id: string;
  onRemove: (id: string) => void;
};


const ListItem: FC<Props> = (props) => {
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  let deleteModal: JSX.Element | null = null;
  
  if (showDeleteModal) {
    const deleteModalProps: DeleteModalProps = {
      isOpen: showDeleteModal,
      onRequestClose: hideDeleteModalHandler,
      onDelete: deleteItem.bind(null, props.id)
    };

    deleteModal = <DeleteModal {...deleteModalProps} />;
  }

  function deleteItem() {
    console.log(props.id);
    props.onRemove(props.id);
  }

  function showDeleteModalHandler() {
    console.log("Showing Delete Modal NOW");
    console.log("ID:", props.id);
    setShowDeleteModal(true);
  }

  function hideDeleteModalHandler() {
    setShowDeleteModal(false);
  }

  return (
    <>
    {showDeleteModal && deleteModal}
    <li
      className={classes["list-item"]}
      onMouseEnter={() => setShowDeleteButton(true)}
      onMouseLeave={() => setShowDeleteButton(false)}
      
      onClick={showDeleteModalHandler}
    >
      <span className={classes.description}>{props.description}</span>
      <span className={classes.year}>{props.year}</span>
      {showDeleteButton && <DeleteIcon />}
    </li>
    </>
  );
};

export default ListItem;

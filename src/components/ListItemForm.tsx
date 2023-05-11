import { FC, FormEvent } from "react";
import Input from "./Input";
import classes from "./ListItemForm.module.css";
import { useRef } from "react";
import ListItemObject from "../model/ListItem";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

type Props = {
  onSaveItem: (item: ListItemObject) => void;
};

const ListItemForm: FC<Props> = (props) => {
  const goalRef = useRef<HTMLInputElement | null>(null);
  const yearRef = useRef<HTMLInputElement | null>(null);

  function generateId(): string {
    return uuidv4();
  }

  function submitGoal(event: FormEvent) {
    event.preventDefault();

    const enteredGoal = goalRef.current!.value;
    const enteredYear = parseInt(yearRef.current!.value);

    if (enteredGoal.toString().trim().length === 0 || !enteredYear) {
      return;
    }

    if (enteredYear < 1 || enteredYear > 9999) {
      return;
    }

    //generate ID here
    const id = generateId();

    const item = new ListItemObject(enteredGoal, enteredYear, id);
    props.onSaveItem(item);

    goalRef.current!.value = "";
    yearRef.current!.value = "";
  }

  return (
    <Card className={classes.card}>
      <form className={classes.form} onSubmit={submitGoal} data-testid="form">
        <Input
          id="description"
          labelText="Goal"
          placeholder="What would you like to accomplish?"
          ref={goalRef}
          type="text"
        />
        <Input
          id="year"
          labelText="Complete By"
          placeholder="Year"
          ref={yearRef}
          type="number"
        />
        <button
          type="submit"
          className={classes.button}
          data-testid="submit-button"
        >
          +
        </button>
      </form>
    </Card>
  );
};

export default ListItemForm;

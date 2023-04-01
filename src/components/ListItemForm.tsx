import { FC, FormEvent } from "react";
import Input from "./Input";
import classes from './ListItemForm.module.css';
import {useRef} from 'react';

const ListItemForm: FC = () => {
    const goalRef = useRef();
    const yearRef = useRef();

    function submitGoal(event: FormEvent) {
        event.preventDefault();
    }

  return (
    <form className={classes.form} onSubmit={submitGoal}>
      <Input
        id="description"
        labelText="Goal"
        placeholder="What would you like to accomplish?"
      />
      <Input id="year" labelText="Complete By" placeholder="Year" />
      <button type="submit">+</button>
    </form>
  );
};

export default ListItemForm;

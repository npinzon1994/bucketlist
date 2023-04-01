import { FC } from "react";
import classes from './Input.module.css';

type Props = {
  id: string;
  labelText: string;
  placeholder: string;
};

const Input: FC<Props> = (props) => {
  return (
    <div className={classes.container}>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input type="text" id={props.id} placeholder={props.placeholder} />
    </div>
  );
};

export default Input;

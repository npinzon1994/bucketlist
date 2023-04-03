import { forwardRef } from "react";
import classes from "./Input.module.css";

type Props = {
  id: string;
  labelText: string;
  placeholder: string;
  type: string;
};

export type Ref = HTMLInputElement;

const Input = forwardRef<Ref, Props>((props, ref) => {
  return (
    <div className={classes.container} data-testid="container">
      <label htmlFor={props.id} data-testid="label">{props.labelText}</label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        ref={ref}
        data-testid="input"
      />
    </div>
  );
});

export default Input;

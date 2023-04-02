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
    <div className={classes.container}>
      <label htmlFor={props.id}>{props.labelText}</label>
      <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        ref={ref}
      />
    </div>
  );
});

export default Input;

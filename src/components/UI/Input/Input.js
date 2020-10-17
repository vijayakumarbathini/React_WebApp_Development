import React from "react";
import classes from "./Input.css";

const input = (props) => {
  let inputElement = null;

  switch (props.inputtype) {
    case "input":
      inputElement = (
        <input className={classes.InputElement} {...props.elementConfig} onChange={props.change}/>
      );
      break;
    case "textarea":
      inputElement = (
        <textarea className={classes.InputElement} {...props.elementConfig} onChange={props.change}/>
      );
      break;
    case "select":
      inputElement = (
        <select  className={classes.InputElement} onChange={props.change}>
          {props.elementConfig.options.map((option) => {
            return <option key={option.value} value={option.value}>{option.display}</option>;
          })}
        </select>
      );
      break;
      case "password":
        <input className={classes.InputElement} {...props.elementConfig} onChange={props.change}/>
        break;
    default:
      inputElement = (
        <input className={classes.InputElement} {...props.elementConfig} onChange={props.change}/>
      );
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;

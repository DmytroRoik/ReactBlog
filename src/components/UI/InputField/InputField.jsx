import React from 'react';
import classes from './InputField.css';

const inputField=(props)=>{
  let inputClasses=["validate"];
  if(props.hasError){
    inputClasses.push(classes.error);
  }
  return(
    <div className={"row "+ classes.InputField}>
        <div className="input-field col s12">
          <i className="material-icons prefix">{props.icon}</i>
          <input id={props.id} type={props.type || "text"} className={inputClasses.join(' ')} onInput={props.onInputData} onChange={props.onChange}/>
          <label htmlFor={props.id}>{props.title}</label>
        </div>
    </div>
  );
}
export default inputField;

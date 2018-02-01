import React from 'react';
import classes from './LoginField.css';


//<LoginField icon="" type="" id="" title=""/>
const loginField=(props)=>(
    <div className={"row "+ classes.LoginField}>
        <div className="input-field col s12">
          <i className="material-icons prefix">{props.icon}</i>
          <input id={props.id} type={props.type || "text"} className="validate"/>
          <label htmlFor={props.id}>{props.title}</label>
        </div>
    </div>
);
export default loginField;
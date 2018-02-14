import React from 'react';
import classes from './ControlButton.css';

const controlButton=(props)=>(
  <div className={classes.ControlButton}>
    <button className={props.btnStyle} onClick={props.clicked}>{props.title}</button>
  </div>
);
export default controlButton;

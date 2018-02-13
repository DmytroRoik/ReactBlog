import React from 'react';
import classes from './DropBox.css';

const dropBox=(props)=>(
  <div className={classes.DropBox}
    onDrop={props.drop}
    onDragEnter={props.ondrag}
    onDragOver={props.ondrag}
    onDragLeave={props.onDragLeave}
    >

    {props.children}
  </div>
);
export default dropBox;

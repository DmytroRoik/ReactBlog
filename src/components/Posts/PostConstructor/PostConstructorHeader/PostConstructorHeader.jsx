import React from 'react';
import classes from './PostConstructorHeader.css';

const postConstructorHeader=(props)=>(
  <div className={classes.PostConstructorHeader}>
    <input type="text" placeholder="Title" id="title" required onInput={props.onInputValue}/>
    <button onClick={props.onCreate}>Create</button>
  </div>
);
export default postConstructorHeader;

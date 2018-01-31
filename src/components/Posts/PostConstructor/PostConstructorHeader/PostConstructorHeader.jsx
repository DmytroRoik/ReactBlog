import React from 'react';
import classes from './PostConstructorHeader.css';

const postConstructorHeader=(props)=>(
  <div className={classes.PostConstructorHeader}>
    <input type="text" placeholder="Title" />
    <button >Create</button>
  </div>
);
export default postConstructorHeader;

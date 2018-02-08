import React from 'react';
import classes from './PostConstructorHeader.css';
import { Link } from 'react-router-dom';

const postConstructorHeader=(props)=>(
  <div className={classes.PostConstructorHeader}>
    <input type="text" placeholder="Title" id="title" required onInput={props.onInputValue}/>
    <Link to="/posts" onClick={props.onCreate}>
      Create
    </Link>
  </div>
);
export default postConstructorHeader;

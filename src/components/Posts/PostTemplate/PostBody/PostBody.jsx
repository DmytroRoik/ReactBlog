import React from 'react';
import classes from './PostBody.css';

const postBody=(props)=>(
  <div className={classes.PostBody} onDoubleClick={props.onClicked}>
     <span className={classes.Title}>{props.title}</span>

    <p className={classes.Content}>
      {props.content}
    </p>

    <img  src={props.img} alt=""/>
  </div>
);
export default postBody;

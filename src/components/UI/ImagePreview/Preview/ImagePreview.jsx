import React from 'react';
import classes from './ImagePreview.css';

const imagePreview=(props)=>(
  <div className={classes.Preview}>
    <img src={props.img} alt="picture" onClick={props.clicked}/>

  </div>
);
export default imagePreview;

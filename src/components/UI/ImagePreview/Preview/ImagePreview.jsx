import React from 'react';
import classes from  './ImagePreview.css';

const imagePreview=(props)=>(
  <div className={"ImagePreview " + classes.Preview}>
    <img src={props.img} alt=" " onClick={props.clicked}/>
  </div>
);
export default imagePreview;

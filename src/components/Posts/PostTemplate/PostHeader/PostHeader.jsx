import React from 'react';
import classes from './PostHeader.css';

const postHeader=(props)=>(
  <div className={classes.PostHeader}>
    <div>
      <img src="https://image.freepik.com/free-photo/cute-cat-picture_1122-449.jpg" 
          alt="Avatar" className={classes.Avatar}/>
        <span className={classes.userName}>UserName:</span>
    </div>
    <span className={classes.Category}>Category</span>
  </div>
);
export default postHeader;

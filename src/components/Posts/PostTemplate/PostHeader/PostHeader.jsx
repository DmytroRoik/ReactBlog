import React from 'react';
import classes from './PostHeader.css';

const postHeader=(props)=>(
  <div className={classes.PostHeader} onDoubleClick={props.onClicked}>
    <div>
      <img src={props.avatar ||"https://image.freepik.com/free-photo/cute-cat-picture_1122-449.jpg"}
          alt=" " className={classes.Avatar}/>
        <span className={classes.userName}>{props.author}</span>
    </div>
    {
      props.editable ? <input className={classes.Category} id="category" defaultValue = { props.category}/>
    :<span className={classes.Category}>{props.category}</span>
    }

  </div>
);
export default postHeader;

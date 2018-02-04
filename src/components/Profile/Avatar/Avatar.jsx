import React from 'react';
import classes from './Avatar.css';

const avatar=(props)=>
{
    let avatarIcon=props.gender==="male"
        ?"http://lion-company.com.ua/wp-content/uploads/2016/04/icon_avatar-male.png":
        "https://wellness.appstate.edu/images/filecabinet/folder18/Blank_woman_placeholder.png";
    return(
        <div className={classes.Avatar}>
            <img src={props.avatar|| avatarIcon } alt="avatar" onError={(e)=>e.target.src=avatarIcon}/>
        </div>
    );
}
export default avatar;

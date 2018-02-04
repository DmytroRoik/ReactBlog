import React from 'react';
import classes from './ProfileInfo.css';

const profileInfo=(props)=>{
    return(
        <div className={classes.ProfileInfo}>
            <span>{props.user.firstName||"username"}</span>
            <span>{props.user.lastName}</span>
            <p>{ props.user.gender||""}</p>
        </div>
    );
}
export default profileInfo;

import React from 'react';
import classes from './ProfileInfo.css';

const profileInfo=(props)=>{
    return(
        <div className={classes.ProfileInfo}>
            <p>{props.username||"username"}</p>
            <p>{ props.gender||"gender"}</p>      
        </div>
    );
}
export default profileInfo;
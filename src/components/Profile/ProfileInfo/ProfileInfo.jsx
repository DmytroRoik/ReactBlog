import React from 'react';
import classes from './ProfileInfo.css';

const profileInfo=(props)=>{
    return(
        <div className={classes.ProfileInfo}>
           <h2>
            <span>{props.user.firstName||""}</span>
            <span>{props.user.lastName}</span>
          </h2>
            <p>gender: { props.user.gender||""}</p>

        </div>
    );
}
export default profileInfo;

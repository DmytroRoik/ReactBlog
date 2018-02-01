import React from 'react';
import classes from './SocialPanel.css';

import FacebookLogin from './Facebook/FacebookLogin';
import GoogleLogin from './Google/GoogleLogin';
import LinkedinLogin from './Linkedin/Linkedin';

const socialLogin=(props)=>(
    <div className={classes.SocialPanel}>  
        <FacebookLogin />
        <GoogleLogin />
    </div>
);
export default socialLogin;

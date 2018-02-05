import React from 'react';
import classes from '../RegisterPage/RegisterPage.css';
import LoginField from '../../NavigationItems/Logger/LoginField/LoginField';

const logingStartPage=(props)=>(
  <div className={classes.RegisterPage}>

    <form onSubmit={props.submited} id="loginForm">
      <div className={classes.title}>
        <span>Sign In</span>
      </div>
      <LoginField
        icon="account_circle"
        type="text"
        id="loginUsername"
        title="login"
        />
      <LoginField
        icon="account_circle"
        type="password"
        id="loginPassword"
        title="password"
        />
      <button type="submit">Sign in</button>
    </form>

  </div>
);
export default logingStartPage;

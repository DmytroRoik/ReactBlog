import React from 'react';
import classes from './RegisterPage.css';
import SocialPanel from '../../NavigationItems/Logger/SocialPanel/SocialPanel';
import LoginField from '../../NavigationItems/Logger/LoginField/LoginField';


const registerPage=(props)=>(
  <div className={classes.RegisterPage}>
    <form id="registerForm" onSubmit={props.submited}>
      <div className={classes.title}>
      <div>Sign up now</div>
      <p>Fill the form below to get instant access</p>
      </div>
      <LoginField
      icon="account_circle"
      type="text"
      id="registerUsername"
      title="username"
      />
      <LoginField
      icon="account_circle"
      type="password"
      id="registerPasword"
      title="password"
      />
      <LoginField
      icon="account_circle"
      type="text"
      id="registerFirstName"
      title="first name"
      />
      <LoginField
      icon="account_circle"
      type="text"
      id="registerLastName"
      title="last name"
      />
      <div className={classes.genderBtn}>
        <button onClick={props.chooseGender} id="genderMaleBtn">Male</button>
        <button onClick={props.chooseGender} id="genderFemaleBtn">Female</button>
      </div>

      <LoginField
      icon="account_circle"
      type="text"
      id="registerAvatar"
      title="avatar"
      />
      <button type="submit">Sign up</button>
      <hr/>
      <div className={classes.footer}>
      <span>or</span>
      <SocialPanel/>
      </div>
  </form>
  </div>
);
export default registerPage;

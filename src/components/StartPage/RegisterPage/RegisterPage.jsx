import React from 'react';
import classes from './RegisterPage.css';
import LoginField from '../..//UI/InputField/InputField';

import ImagePreview from '../../../containers/ImagePreview/ImagePreview';

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
      icon="fingerprint"
      type="password"
      id="registerPasword"
      title="password"
      />
      <LoginField
      icon="person"
      type="text"
      id="registerFirstName"
      title="first name"
      />
      <LoginField
      icon="mode_edit"
      type="text"
      id="registerLastName"
      title="last name"
      />
      <div className={classes.genderBtn}>
        <button onClick={props.chooseGender} id="genderMaleBtn">Male</button>
        <button onClick={props.chooseGender} id="genderFemaleBtn">Female</button>
      </div>

      {/* <LoginField
      icon="add_a_photo"
      type="text"
      id="registerAvatar"
      title="avatar URL"
      /> */}
      <ImagePreview/>
      <button type="submit">Sign up</button>
  </form>
  </div>
);
export default registerPage;

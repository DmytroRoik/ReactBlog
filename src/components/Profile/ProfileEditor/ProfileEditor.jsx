import React from 'react';
import classes from './ProfileEditor.css';

import InputField from '../../UI/InputField/InputField';
import ImagePreview from '../../../containers/ImagePreview/ImagePreview';

const profileEditor=(props)=>(
  <div className={classes.ProfileEditor}>
  <form id="editUserForm">
    <InputField
      icon="fingerprint"
      type="password"
      id="registerPasword1"
      title="password"
      onInputData={props.onInputValue}/>
    <InputField
      icon="fingerprint"
      type="password"
      id="registerPasword2"
      title="Confirm password"
      onInputData={props.onInputValue}/>

    <InputField
      icon="person"
      type="text"
      id="registerFirstName"
      title="first name"
      onInputData={props.onInputValue}/>
    <InputField
      icon="mode_edit"
      type="text"
      id="registerLastName"
      title="last name"
      onInputData={props.onInputValue}/>
    <ImagePreview/>
    <button type="submit">Save</button>
    </form>
  </div>
);
export default profileEditor;

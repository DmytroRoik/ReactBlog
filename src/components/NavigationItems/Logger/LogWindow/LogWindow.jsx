import React from 'react';
import classes from './LogWindow.css';

import SocialPanel from '../SocialPanel/SocialPanel';
import LoginField from '../LoginField/LoginField';
import BackDrop from '../../../UI/BackDrop/BackDrop';
import Aux from '../../../../containers/hoc/Aux';

const logWindow=(props)=>
{
  let attachedClass=[classes.LogWindow];
  if(props.show)attachedClass.push(classes.open);
  else attachedClass.push(classes.close);

  attachedClass=attachedClass.join(' ');
  return(
    <Aux>
      <div>
        <BackDrop clicked={props.closeWindow} show={props.show}/>
      </div>
      <div className={attachedClass}>
          <form>
            <img className={classes.avatar} src="https://imagineacademy.microsoft.com/content/images/microsoft-img.png" alt ="avatarIcon"/>
            <LoginField icon="account_circle" type="text" id="emailLogin" title="Email or username"/>
            <LoginField icon="enhanced_encryption" type="password" id="password" title="Password"/>
            <div className={classes.buttons}>
              <button type="submit">Login</button>
              <button >Register</button>
            </div>
          </form>
          <hr/>
          <span>or login with</span>
          <SocialPanel/>
      </div>
    </Aux>
    
  );
}
export default logWindow;
import React from 'react';
import classes from './LogWindow.css';

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
          <a href="/" onClick={props.onLogoutClick}>Log out</a>
      </div>
    </Aux>

  );
}
export default logWindow;

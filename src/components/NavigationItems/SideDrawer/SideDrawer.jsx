import React from 'react';
import classes from './SideDrawer.css';
import Aux from '../../../containers/hoc/Aux';
import BackDrop from '../../UI/BackDrop/BackDrop';
import Menu from '../../Menu/AsideMenu';
import Logo from '../../Logo/Logo';

const sideDrawer=(props)=>{
    let attachedClasses=[classes.SideDrawer];

  if(props.open)attachedClasses.push(classes.Open);
  else attachedClasses.push(classes.Close);
  attachedClasses=attachedClasses.join(' ');

  return(
    <Aux>
      <BackDrop
        show={props.open}
        clicked={props.closedClick}/>
      <div className={attachedClasses}>
      <div className={classes.Logo}>
        <Logo/>
       </div>
        <Menu/>
      </div>
    </Aux>
  );
}
export default sideDrawer;

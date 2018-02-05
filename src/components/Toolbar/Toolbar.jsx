import React,{Component} from 'react';
import classes from './Toolbar.css';

import Logo from '../Logo/Logo';
import Categories from '../NavigationItems/Categories/Categories';
import LoggerButton from '../NavigationItems/Logger/LoggerButton';
import DrawerToggle from '../NavigationItems/SideDrawer/SideDrawerToggle/DrawerToggle';

class Toolbar extends Component{
  render(){
    return(
      <header className={classes.Toolbar}>
      <DrawerToggle clicked={this.props.drawerToggleClicked}/>
       <div className={classes.Logo}>
          <Logo/>
       </div>
       <div className={classes.Categories}>
          <Categories/>
        </div>
        <LoggerButton/>
      </header>
    );
  }
}
export default Toolbar;

import React,{Component} from 'react';
import classes from './AsideMenu.css';

import MenuItem from './MenuItem/MenuItem';

class AsideMenu extends Component{
  render(){
    return (
      <aside className={classes.AsideMenu}>
        <MenuItem title="Profile"/>
        <MenuItem title="My Posts"/>
        <MenuItem title="All Posts"/>
      </aside>
    );
  }
}
export default AsideMenu;

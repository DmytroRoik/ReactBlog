import React,{Component} from 'react';
import classes from './AsideMenu.css';

import MenuItem from './MenuItem/MenuItem';
import {Link} from 'react-router-dom';

class AsideMenu extends Component{
  render(){
    return (
      <aside className={classes.AsideMenu}>
        <Link to="/profile">
         <MenuItem title="Profile"/>
        </Link>
        <Link to="/my-posts">
          <MenuItem title="My Posts"/>
         </Link>
         <Link to="/">
          <MenuItem title="All Posts"/>
         </Link>
         <Link to="/new-post">
          <MenuItem title="Create Post"/>
         </Link>
      </aside>
    );
  }
}
export default AsideMenu;

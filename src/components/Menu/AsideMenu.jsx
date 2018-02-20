import React from 'react';
import classes from './AsideMenu.css';

import MenuItem from './MenuItem/MenuItem';
import {Link} from 'react-router-dom';

const asideMenu =(props) => {
    return (
      <aside className={classes.AsideMenu}>
        <Link to="/profile">
          <MenuItem title="Profile"/>
        </Link>

        <Link to="/posts"  >
          <MenuItem title="All Posts"/>
        </Link>

        <Link to="/new-post">
          <MenuItem title="Create Post"/>
        </Link>
      </aside>
    );
}

export default asideMenu;

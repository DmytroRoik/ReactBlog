import React from 'react';
import classes from './MenuItem.css';

const menuItem=(props)=>(
  <div className={classes.MenuItem}>
    {props.title}
  </div>
);
export default menuItem;

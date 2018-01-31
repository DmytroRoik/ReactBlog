import React from 'react';
import classes from './SearchResultItem.css';

const searchResultItem=(props)=>(
  <div className={classes.SearchResultItem}>
    {props.children}
  </div>
);
export default searchResultItem;

import React from 'react';
import classes from './SearchResultItems.css';
import SearchResultItem from './SearchResultItem/SearchResultItem';

const searchResultItems=(props)=>(
  <div className={classes.SearchResultItems}>
   {props.searchResult.map((item)=>{
     return (
       <SearchResultItem>{item}</SearchResultItem>
     );
   })}   
  </div>
);
export default searchResultItems;

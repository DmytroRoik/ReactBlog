import React from 'react';
import classes from './CategoriesSlider.css';
import Category from '../Category/Category';

const  categoriesSlider=(props)=>{
  let attachedClasses=[classes.CategoriesSlider];
  if(props.show)attachedClasses.push(classes.open);
  else attachedClasses.push(classes.hidden);
  attachedClasses = attachedClasses.join(' ');

  return(
  <div className={attachedClasses}>
      <Category title="123"/>
      <Category title="1232"/>
      <Category title="1233"/>
      <Category title="1234"/>
      <Category title="1235"/>
  </div>
  );
}
export default  categoriesSlider;

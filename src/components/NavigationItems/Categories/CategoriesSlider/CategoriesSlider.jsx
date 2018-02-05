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
      {
        props.categories.map(category=>{
          return(
            <Category
              clicked={props.onclicked}
              title={category}
              key={category}/>
          )
        })
      }
  </div>
  );
}
export default  categoriesSlider;

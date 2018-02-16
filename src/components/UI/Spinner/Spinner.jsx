import React from 'react';
import classes from './Spinner.css';

const spinner=(props)=>{
  let attachedClasses=[classes.Spinner];

  if(!props.show)
     attachedClasses.push(classes.Close)

     return (
      <div className={attachedClasses.join(' ')}>
        <div className={classes.loader}></div>
      </div>
    );
}
export default spinner;

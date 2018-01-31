import React from 'react';
import classes from './PostConstructorBody.css';

const postConstructorBody=(props)=>(
  <div className={classes.PostConstructorBody}>
    <div className="input-field col s12">
      <textarea id="textareaBodyPost"  className="materialize-textarea">
      </textarea>
      <label htmlFor="textareaBodyPost">Post body...</label>
    </div>
  </div>
);
export default postConstructorBody;

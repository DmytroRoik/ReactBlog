import React from 'react';
import classes from './PostConstructorBody.css';

const postConstructorBody=(props)=>(
  <div className={classes.PostConstructorBody}>
    <div className="input-field col s12">
      <textarea id="textareaBodyPost"  className="materialize-textarea" data-length="500" required>
      </textarea>
      <label htmlFor="textareaBodyPost">Post body...</label>
    </div>
    
    <div className="input-field col s6">
          <input id="category" type="text" className="validate" required/>
          <label htmlFor="category">Category</label>
    </div>
    <div className="input-field col s6">
          <input id="imgUrl" type="text" className="validate"/>
          <label htmlFor="imgUrl">Image Url</label>
    </div>
  </div>
);
export default postConstructorBody;

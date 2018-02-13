import React from 'react';
import classes from './PostConstructorBody.css';

import ImagePreview from '../../../../containers/ImagePreview/ImagePreview';

const postConstructorBody=(props)=>(
  <div className={classes.PostConstructorBody}>
    <div className="input-field col s12">
      <textarea id="content"  className="materialize-textarea" data-length="500" required onInput={props.onInputValue}>
      </textarea>
      <label htmlFor="content">Post body...</label>
    </div>

    <div className="input-field col s6">
          <input id="category" type="text" className="validate" required onInput={props.onInputValue}/>
          <label htmlFor="category">Category</label>
    </div>
  <ImagePreview/>
    {/* <div className="input-field col s6">
          <input id="img" type="text" className="validate" onInput={props.onInputValue}/>
          <label htmlFor="img">Image Url</label>
    </div> */}
  </div>
);
export default postConstructorBody;

import React from 'react';
import classes from './PostBody.css';

const postConstructorBody=(props)=>(
  <div className={classes.PostBody}>

     <form onSubmit={(e)=>{ props.onSave(e) }} >
      <input className={classes.Title} id="title" defaultValue={props.title} disabled/>
      <div className="input-field col s12">
        <textarea id="content"  className="materialize-textarea" data-length="500" defaultValue={props.content} required onInput={props.onInputValue}>

        </textarea>
        <label htmlFor="content">Post body...</label>
      </div>

      <div className="input-field col s6">
            <input id="img" type="text" className="validate" defaultValue={props.img} onInput={props.onInputValue}/>
            <label htmlFor="img">Image Url</label>
      </div>
      <button type="submit">Update</button>
      <button onClick={props.onPressDelete}>Delete</button>
    </form>
  </div>
);
export default postConstructorBody;

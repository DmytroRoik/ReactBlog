import React from 'react';
import classes from './PostTemplate.css';

import Header from './PostHeader/PostHeader';
import Body from './PostBody/PostBody';
import ConstructorBody from '../PostEditTemplate/PostBody/PostBody';

const postTemplate=(props)=>(
  <div className={classes.PostTemplate}>
    <Header
            avatar={props.avatar}
            author={props.author}
            category={props.category}
            editable={props.editable}
            onClicked={props.onEditActivate}/>

    {props.editable?
       <ConstructorBody
         title={props.title}
         content={props.content}
         img={props.img}
         onSave={props.onSave}
         onPressDelete={props.onDeletePost}/>
     :<Body
       title={props.title}
       content={props.content}
       img={props.img}
       onClicked={props.onEditActivate} />
    }
  </div>

);
export default postTemplate;

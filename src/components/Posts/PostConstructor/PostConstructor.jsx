import React,{Component} from 'react';
import classes from './PostConstructor.css';

import PostHeader from './PostConstructorHeader/PostConstructorHeader';
import PostBody from './PostConstructorBody/PostConstructorBody';

class PostConstructor extends Component{
  render(){
    return (
      <div className={classes.PostConstructor}>
        <PostHeader/>
        <PostBody/>        
      </div>
    );
  }
}
export default PostConstructor;

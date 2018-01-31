import React,{Component} from 'react';
import classes from './PostList.css';

import Post from '../../components/Posts/PostTemplate/PostTemplate';

class PostList extends Component{
  constructor(props){
    super(props);
    this.state={
      posts:[
        {
          username:"Username",
          avatar:"",
          title:"",
          body:"",
        }
      ]
    }
  }
  render(){
    return (
      <div className={classes.PostList}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    );
  }
}
export default PostList;

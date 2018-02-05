import React,{Component} from 'react';
import classes from './PostConstructor.css';

import PostHeader from './PostConstructorHeader/PostConstructorHeader';
import PostBody from './PostConstructorBody/PostConstructorBody';
import { connect } from 'react-redux';
import { createPostAction } from '../../../actions//actionPost';
import axios from 'axios';

class PostConstructor extends Component{

  constructor(props){
    super(props);
    this.data={};
  }

  onCreatePostHandler=()=>{
    const token = sessionStorage.getItem('accessToken');
    const post=this.data;
    post.author=this.props.user.username;
    let isContentPresent = this.isValuePresent( post.title ) && this.isValuePresent( post.content );
    if( isContentPresent && this.isValuePresent( post.category )){
      axios.post('https://koa-neo4j-blog.herokuapp.com/api/post/new',{
        title: post.title,
        img: post.img,
        content: post.content,
        category: post.category
      },
      {
        headers: {
            'Authorization': token,
        }
    })
      .then(res=>{
        console.log(res)
        this.props.createPostFunction(this.data);
      })

    }
    else{
      alert("Must be:\n - Title\n - Body");
    }
  }

  isValuePresent(value){
    var result = value===undefined? false: value.trim().length !== 0;
    return result;
  }
  onInputValueHandler=(e)=>{
    this.data[e.target.id]=e.target.value;
  }

  render(){
    return (
      <div className={classes.PostConstructor}>
        <PostHeader onInputValue={this.onInputValueHandler} onCreate={this.onCreatePostHandler}/>
        <PostBody onInputValue={this.onInputValueHandler}/>
      </div>
    );
  }
}
const mapDispatchToProps=dispatch=>{
  return {
    createPostFunction: (post)=>dispatch(createPostAction(post))
  }
}
const mapStateToProp=state=>{
  return{
    user:state.user.user
  }
}

export default connect(mapStateToProp,mapDispatchToProps)(PostConstructor);

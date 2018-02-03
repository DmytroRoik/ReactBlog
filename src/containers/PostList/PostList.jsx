import React,{Component} from 'react';
import classes from './PostList.css';

import Post from '../../components/Posts/PostTemplate/PostTemplate';
import {connect} from 'react-redux';
import {editPostAction,deletePostAction,enableEditionPostAction} from '../../actions/actionPost'

class PostList extends Component{
  constructor(props){
    super(props);

    this.selectedPost={}
  }
  onPostClick=(prop)=>{
    this.selectedPost.title=prop.title;
  }
  onDoubleClickEditActivate=()=>{
    this.props.enableEditionPostFunction(this.selectedPost);
    console.log(this.selectedPost)
  }
  onSubmitChanges(e){
    e.preventDefault();
    let form = e.target;
    let post={
      title: this.selectedPost.title,
      content:form.content.value,
      img:form.img.value,
      category:document.getElementById('category').value
    }
    if(post.content){
      this.setState({editablePost:false})
      this.props.editPostFunction(post);
    }
  }
  render(){
    return (
      <div className={classes.PostList}>
      {this.props.posts.map((post)=>{
        return <Post
          editable={post.editablePost}
          key= {post.title+'t'}
          title={post.title}
          author={post.author}
          content={post.content}
          img={post.img}
          category={post.category}

          clicked={this.onPostClick}
          onEditActivate={this.onDoubleClickEditActivate}
          onSave={this.onSubmitChanges.bind(this)}
        />
      })}
      </div>
    );
  }
}
const mapDispatchToProps=dispatch=>{
  return {
    editPostFunction: (post)=>dispatch(editPostAction(post)),
    deletePostFunction: (post)=>dispatch(deletePostAction(post)),
    enableEditionPostFunction: (post)=>dispatch( enableEditionPostAction(post))
  }
}


function mapStateToProps(store){
  return {
    posts: store.posts.posts
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostList);

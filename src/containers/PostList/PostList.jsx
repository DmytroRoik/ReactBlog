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

  onDoubleClickEditActivate=(e)=>{
    this.selectedPost=e;
    this.props.enableEditionPostFunction(this.selectedPost);
  }
  onSubmitChanges(e){
    e.preventDefault();
    let form = e.target;
     this.selectedPost={
      title: form.title.value,
      content:form.content.value,
      img:form.img.value,
      category:document.getElementById('category').value
    }
    if(this.selectedPost.content){
      this.setState({editablePost:false})
      this.props.editPostFunction(this.selectedPost);
    }
  }
  onDeletePostHandler=()=>{
    this.props.deletePostFunction(this.selectedPost);
  }
  render(){
    return (
      <div className={classes.PostList}>
      {this.props.posts.map((post)=>{
        return <Post
          editable={post.editablePost}
          key= {post.title}
          title={post.title}
          author={post.author}
          content={post.content}
          img={post.img}
          category={post.category}

          onEditActivate={()=>this.onDoubleClickEditActivate(post)}
          onDeletePost={this.onDeletePostHandler}
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


function mapStateToProps(state){
  return {
    posts: state.posts.posts
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostList);

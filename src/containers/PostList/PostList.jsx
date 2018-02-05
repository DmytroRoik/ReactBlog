import React,{Component} from 'react';
import classes from './PostList.css';

import Post from '../../components/Posts/PostTemplate/PostTemplate';
import {connect} from 'react-redux';
import {editPostAction,deletePostAction,enableEditionPostAction} from '../../actions/actionPost'
import axios from 'axios';

class PostList extends Component{
  constructor(props){
    super(props);
    this.selectedPost={}
  }

  onDoubleClickEditActivate=(e)=>{
    this.selectedPost=e;
    this.props.enableEditionPostFunction(this.selectedPost);
  }
  onCancelBtnClickHandler=()=>{

  }

  onEditPostHandler(e){
    e.preventDefault();
    let form = e.target;
    this.selectedPost={
      title: form.title.value,
      content:form.content.value,
      img:form.img.value,
      category:document.getElementById('category').value
    }

    if(this.selectedPost.content){
      this.setState({editablePost:false});
      const token = sessionStorage.getItem('accessToken');

      axios.put('https://koa-neo4j-blog.herokuapp.com/api/post/update',{
        title:    this.selectedPost.title,
        img:      this.selectedPost.img,
        content:  this.selectedPost.content,
        category: this.selectedPost.category
        },
        {
          headers: {
            'Authorization': token,
        }
        })
        .then( response =>{
          this.props.editPostFunction(response.data);
        })
        .catch( error=>{
          console.log(error);
        });
   }
  }

  onDeletePostHandler=()=>{
    const token=sessionStorage.getItem('accessToken');

    axios.post('https://koa-neo4j-blog.herokuapp.com/api/post/delete', {
        title: this.selectedPost.title
      },
      {
        headers: {
          'Authorization': token,
      }
      })
    .then(response=>{
      this.props.deletePostFunction(this.selectedPost);
    })
    .catch(error=>{
      console.log(error)
    })

  }

  render(){
    return (
      <div className={classes.PostList}>
      {this.props.posts.map((post)=>{
        return <Post
        editable={post.editablePost}
        title={post.title}
        author={post.author}
        content={post.content}
        img={post.img}
        category={post.category}

        onEditActivate={()=>this.onDoubleClickEditActivate(post)}
        onDeletePost={this.onDeletePostHandler}
        onSave={this.onEditPostHandler.bind(this)}
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

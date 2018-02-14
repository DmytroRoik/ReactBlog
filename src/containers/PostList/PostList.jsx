import React,{Component} from 'react';
import classes from './PostList.css';

import Post from '../../components/Posts/PostTemplate/PostTemplate';
import { connect } from 'react-redux';
import { fetchUpdatePost, fetchDeletePost, enableEditionPostAction } from '../../actions/actionPost';

class PostList extends Component{
  constructor(props){
    super(props);
    this.selectedPost={}
  }

  onDoubleClickEditActivate=(e)=>{
    if(e.author!==this.props.user.firstName+" "+this.props.user.lastName)return;
    this.selectedPost=e;
    this.props.enableEditionPostFunction(this.selectedPost);
  }

  onEditPostHandler(e){
    e.preventDefault();
    let $form = e.target;
    const image = $form.querySelector(".ImagePreview img").src;
    this.selectedPost={
      title: $form.title.value,
      content:$form.content.value,
      img:image,
      category:document.getElementById('category').value
    }

    if(this.selectedPost.content){
      this.setState({editablePost:false});
      const token = sessionStorage.getItem('accessToken');
      this.props.onfetchUpdatePost(this.selectedPost, token);
   }
  }

  onDeletePostHandler=()=>{
    const token=sessionStorage.getItem('accessToken');
    this.props.onfetchDeletePost(this.selectedPost, token);
  }

    render(){
      if(this.props.posts.length===0)return null;

    return (
      <div className={classes.PostList}>
      {this.props.posts.map((post)=>{
        return <Post
          key={post.title}
          editable={post.editablePost}
          title={post.title}
          content={post.content}
          img={post.img}

          category={post.category}
          author={post.author}
          avatar={post.avatar}

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
    onfetchUpdatePost: (post, token) => dispatch( fetchUpdatePost(post, token)),
    onfetchDeletePost: (post, token) => dispatch( fetchDeletePost(post, token)),
    enableEditionPostFunction: (post)=> dispatch( enableEditionPostAction(post))
  }
}


function mapStateToProps(state){
  return {
    posts: state.posts.posts,
    user: state.user.user
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PostList);

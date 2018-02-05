import React,{Component} from 'react';
import classes from './AsideMenu.css';

import MenuItem from './MenuItem/MenuItem';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {loadPostAction} from '../../actions/actionPost';
import axios from 'axios';

class AsideMenu extends Component{
  onPressAllPostBtnHandler=()=>{
    axios.get('https://koa-neo4j-blog.herokuapp.com/api/post/getall')
    .then(response=>{
      this.props.loadPosts(response.data);
    });
  }

  onPressLoadMyPostsHandler=()=>{
    axios.post('https://koa-neo4j-blog.herokuapp.com/api/user/getallposts',{username: this.props.user.username})
      .then(res=>{
        this.props.loadPosts(res.data)
      }).catch(err=>{
        console.log(err);
      })
  }

  render(){
    return (
      <aside className={classes.AsideMenu}>
        <Link to="/profile">
         <MenuItem title="Profile"/>
        </Link>

        <Link to="/myposts" onClick={this.onPressLoadMyPostsHandler} >
          <MenuItem title="My Posts"  />
         </Link>

         <Link to="/posts" onClick={this.onPressAllPostBtnHandler} >
          <MenuItem title="All Posts"/>
         </Link>

         <Link to="/new-post">
          <MenuItem title="Create Post"/>
         </Link>

      </aside>
    );
  }
}
const mapDispatchToProp=dispatch=>{
  return{
    loadPosts: (posts)=>dispatch(loadPostAction(posts))
  }
}
const mapStateToProp=state=>{
  return{
    user: state.user.user
  }
}
export default connect(mapStateToProp,mapDispatchToProp)(AsideMenu);

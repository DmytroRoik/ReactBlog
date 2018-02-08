import React,{Component} from 'react';
import classes from './AsideMenu.css';

import MenuItem from './MenuItem/MenuItem';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {loadPostAction} from '../../actions/actionPost';
import axios from 'axios';

class AsideMenu extends Component{

   onPressAllPostBtnHandler= ()=>{
     let result=[];
     axios.get('https://koa-neo4j-blog.herokuapp.com/api/post/getall')
      .then(response=>{
        response.data.forEach (post=>{
          axios.post('https://koa-neo4j-blog.herokuapp.com/api/user/getuser',{username: post.author})
            .then(res=>{
              let item={...post}
              item.author = res.data[0]["_fields"][0].properties.firstName + " " +res.data[0]["_fields"][0].properties.lastName;
              item.avatar = res.data[0]["_fields"][0].properties.img;

              result.push(item)///fix later
              this.props.loadPosts(result);
            })
        })
      })
      .catch(err=>{
        console.log(err);
        return;
    });
  }

  onPressLoadMyPostsHandler=()=>{
    let result=[];
    this.props.loadPosts(result);
    axios.post('https://koa-neo4j-blog.herokuapp.com/api/user/getallposts',{username: this.props.user.username})
    .then(res=>{

      res.data.forEach (post=>{
        axios.post('https://koa-neo4j-blog.herokuapp.com/api/user/getuser',{username: post.author})
          .then(res=>{
            let item={...post}
            item.author = res.data[0]["_fields"][0].properties.firstName + " " +res.data[0]["_fields"][0].properties.lastName;
            item.avatar = res.data[0]["_fields"][0].properties.img;

            result.push(item)//rewrite later
            this.props.loadPosts(result);
          })
      })
    }).catch(err=>{
      console.log(err);
    })
}

insertAuthorAvatarToPosts = (posts)=>{
  let i=0;
  this.authors=[];
  posts.forEach (post=>{
    axios.post('https://koa-neo4j-blog.herokuapp.com/api/user/getuser',{username: post.author})
      .then(res=>{
        this.authors[i++]=({...res.data[0]["_fields"][0].properties});
      })
  })
}

  render(){
    this.onPressLoadMyPostsHandler();
    return (
      <aside className={classes.AsideMenu}>
        <Link to="/" onClick={this.onPressLoadMyPostsHandler}>
        <MenuItem title="Profile"/>
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

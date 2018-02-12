import React,{Component} from 'react';
import classes from './AsideMenu.css';

import MenuItem from './MenuItem/MenuItem';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllPost, fetchAllPostByAuthor } from '../../actions/actionPost';

class AsideMenu extends Component{

  onPressLoadMyPostsHandler=()=>{
    this.props.onfetchAllPostByAuthor( this.props.user.username)
}

  render(){
    this.onPressLoadMyPostsHandler();
    return (
      <aside className={classes.AsideMenu}>
        <Link to="/" onClick={this.onPressLoadMyPostsHandler}>
        <MenuItem title="Profile"/>
        </Link>

        <Link to="/posts" onClick={this.props.onfetchAllPost} >
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
    onfetchAllPost: () => dispatch( fetchAllPost()),
    onfetchAllPostByAuthor: (username) => dispatch( fetchAllPostByAuthor(username))
  }
}
const mapStateToProp=state=>{
  return{
    user: state.user.user
  }
}
export default connect(mapStateToProp,mapDispatchToProp)(AsideMenu);

import React,{Component} from 'react';
import classes from './Profile.css';

import Avatar from '../../components/Profile/Avatar/Avatar';
import ProfileInfo from '../../components/Profile/ProfileInfo/ProfileInfo';
import { connect } from 'react-redux';
import PostList from '../PostList/PostList';

import {  fetchAllPostByAuthor } from '../../actions/actionPost';
import ProfileEditor from './ProfileEditor/ProfileEditor';

class Profile extends Component{
  constructor(props){
    super(props);
    this.state={
      isEditingModeOpen: false,
    };
    this.userData={}
  }

  render(){
        return (
          <div>
            <div className={classes.Profile}>
                <Avatar gender={this.props.user.gender} avatar={this.props.user.img}/>
                <ProfileInfo user={this.props.user}/>
            </div>
            {/*<ProfileEditor/>*/}
             <div className={classes.UserPosts}>
             <hr style={{width:'100%'}}/>
                <h2>My Posts</h2>
                <PostList />
             </div>
          </div>
        );
    }
    componentDidMount(){
      this.props.loadMyPosts(this.props.user.username);
    }
}
const mapDispatchToProps=dispatch=>{
  return{
    loadMyPosts: (username)=> dispatch(fetchAllPostByAuthor(username)),
  }
}

const mapStateToProps=state=>{
  return{
    user: state.user.user,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);

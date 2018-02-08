import React,{Component} from 'react';
import classes from './Profile.css';

import Avatar from '../../components/Profile/Avatar/Avatar';
import ProfileInfo from '../../components/Profile/ProfileInfo/ProfileInfo';
import { connect } from 'react-redux';
import PostList from '../PostList/PostList';

class Profile extends Component{
    render(){
        return (
          <div>
            <div className={classes.Profile}>
                <Avatar gender={this.props.user.gender} avatar={this.props.user.img}/>
                <ProfileInfo user={this.props.user}/>
            </div>
             <div className={classes.UserPosts}>
                <h2>My Posts</h2>
                <PostList />
             </div>
            </div>
        );
    }
}
const mapStateToProps=state=>{
  return{
    user: state.user.user
  }
}
export default connect(mapStateToProps)(Profile);

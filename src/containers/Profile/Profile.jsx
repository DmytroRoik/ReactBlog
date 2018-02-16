import React,{Component} from 'react';
import classes from './Profile.css';

import Avatar from '../../components/Profile/Avatar/Avatar';
import ProfileInfo from '../../components/Profile/ProfileInfo/ProfileInfo';
import { connect } from 'react-redux';
import PostList from '../PostList/PostList';
import ControlPanel from '../../components/Profile/ProfileControlPanel/ControlPanel';
import ProfileEditor from '../../components/Profile/ProfileEditor/ProfileEditor';

import {  fetchAllPostByAuthor } from '../../actions/actionPost';

class Profile extends Component{
  constructor(props){
    super(props);
    this.state={
      isEditingModeOpen: false,
    };
    this.userData={}
  }
  onDeleteClickHandler=()=>{

    alert("delete")
  }

  onEditClickHandler=()=>{
    this.setState((prevState,prop)=>{
      return{
        isEditingModeOpen: !prevState.isEditingModeOpen
      }
    });
  }

  onSubmitValue = e =>{
    e.preventDefault();
    // submit form...
  }
  onInputEditionValue = e  => {
    this.userData[e.target.id] = e.target.value;
    let $confirmPassInput= document.getElementById("registerPasword2")
    let password=document.getElementById("registerPasword1").value;
    let password2= $confirmPassInput.value;
    if(e.target.id==="registerPasword1"||e.target.id==="registerPasword2"){
      if(password2 !==password){
        $confirmPassInput.className= classes.errorInput;
      }
      else{
        $confirmPassInput.className="";
      }
    }
  }

  render(){
      let profileEditor = null;
      if(this.state.isEditingModeOpen){
        profileEditor=(<ProfileEditor
          submitedValue={this.onSubmitValue}
          onInputValue={this.onInputEditionValue}/>);
      }
        return (
          <div>
            <div className={classes.Profile}>
                <Avatar gender={this.props.user.gender} avatar={this.props.user.img}/>
                <ProfileInfo user={this.props.user}/>
            </div>
              <ControlPanel
              buttonClicked={{ destroy: this.onDeleteClickHandler,
                            edit: this.onEditClickHandler}}/>
             <div className={classes.UserPosts}>

             {profileEditor}
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

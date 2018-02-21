import React,{Component} from 'react';
import classes from './ProfileEditor.css';


import InputField from '../../../components/UI/InputField/InputField';
import ImagePreview from '../../ImagePreview/ImagePreview';
import { connect } from 'react-redux';
import ControlPanel from '../../../components/Profile/ProfileControlPanel/ControlPanel';
import {fetchEditUser} from '../../../actions/actionUser';



class ProfileEditor extends Component{
  constructor(props){
    super(props);
    this.state={
      isShow:false
    }
    this.userData={}
    this.errors=false
  }
  onDeleteClickHandler=()=>{

    alert("delete")
  }

  onEditClickHandler=()=>{
    this.setState((prevState,prop)=>{
      return{
        isShow: !prevState.isShow
      }
    });
  }

  onSubmitValue = e =>{
    e.preventDefault();
    // submit form...
    let image=document.querySelector('.ImagePreview img').src||"";
    this.userData.avatar=image;
    if(this.errors){
      alert("confirm the password");
      return;
    }
    let user={
      password: this.userData.registerPasword1||"",
      firstName: this.userData.registerFirstName||"",
      lastName:this.userData.registerLastName||"",
      img: this.userData.avatar||"",
      gender: this.props.user.gender
    }
    this.props.onEditUser(user);
  }

  onInputEditionValue = e  => {
    this.userData[e.target.id] = e.target.value;
    let $confirmPassInput= document.getElementById("registerPasword2")
    let password=document.getElementById("registerPasword1").value;
    let password2= $confirmPassInput.value;

    if(e.target.id==="registerPasword1"||e.target.id==="registerPasword2"){
      if(password2 !==password){
        $confirmPassInput.className= classes.errorInput;
        this.errors=true;
      }
      else{
        $confirmPassInput.className="";
        this.errors=false;
      }
    }
    if(e.target.value===""){
      delete this.userData[e.target.id]
    }


  }

  render(){
    let editPanel=(
      <ControlPanel
      buttonClicked={
        { destroy: this.onDeleteClickHandler,
          edit: this.onEditClickHandler}
        }/>
      );
    if(this.state.isShow===false){
      return editPanel;
    }
    return (
      <div className={classes.ProfileEditor}>
        {editPanel}
       <form id="editUserForm" onSubmit={this.onSubmitValue}>
        <InputField
          icon="fingerprint"
          type="password"
          id="registerPasword1"
          title="password"
          onInputData={this.onInputEditionValue}/>
        <InputField
          icon="fingerprint"
          type="password"
          id="registerPasword2"
          title="Confirm password"
          onInputData={this.onInputEditionValue}/>

        <InputField
          icon="person"
          type="text"
          id="registerFirstName"
          title="first name"
          onInputData={this.onInputEditionValue}/>
        <InputField
          icon="mode_edit"
          type="text"
          id="registerLastName"
          title="last name"
          onInputData={this.onInputEditionValue}/>
        <ImagePreview getImage={this.userData.avatar}/>
        <button type="submit" className={classes.SubmitBtn}>Save</button>
    </form>
  </div>
    );
  }
}
const mapStateToProps = state =>{
  return{
    user: state.user.user,
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    onEditUser:(user)=> dispatch(fetchEditUser(user))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProfileEditor);

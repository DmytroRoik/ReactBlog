import React,{Component} from 'react';
import classes from './StartPage.css';
import RegisterPage from './RegisterPage/RegisterPage';
import LogingStartPage from './LogingStartPage/LogingStartPage';
import axios from 'axios';
import { connect } from 'react-redux';
import {loginUserAction,registerUserAction} from '../../actions/actionUser';

class StartPage extends Component{
  constructor(props){
    super(props);
    this.state={
      isPageShow:true
    }
    this.userValue={ }
    this.gender="male";
  }
  onClickGenderBtnHandler=(e)=>{
    e.preventDefault();
    this.gender=e.target.textContent.toLocaleLowerCase();
    document.getElementById('genderMaleBtn').className="";
    document.getElementById('genderFemaleBtn').className="";
    e.target.className=classes.Active;
  }

  onSubmitedValueHandler=(e)=>{
    e.preventDefault();
    let $form=e.target;
    if($form.id==="loginForm"){
      this.userValue={
        username: $form.loginUsername.value,
        password: $form.loginPassword.value
      }
      axios.post('https://koa-neo4j-blog.herokuapp.com/api/user/signin',this.userValue)
        .then(response=>{
            let token=response.data.data;
            sessionStorage.setItem('accessToken',token);
            this.props.loginUserFunction({...response.data.user});
            this.setState({isPageShow:false});
        })
        .catch(error=>console.log(error));
    }
    else if($form.id==="registerForm"){
      this.userValue={
        username: $form.registerUsername.value,
        password: $form.registerPasword.value,
        firstName: $form.registerFirstName.value,
        lastName: $form.registerLastName.value,
        img: $form.registerAvatar.value,
        gender: this.gender
      }
      axios.post('https://koa-neo4j-blog.herokuapp.com/api/user/signup',this.userValue)
      .then(response=>{
        axios.post('https://koa-neo4j-blog.herokuapp.com/api/user/signin',this.userValue)
        .then(res=>{
          let token=response.data.data;
            sessionStorage.setItem('accessToken',token);
          this.props.registerUserFunction(this.userValue);
          this.setState({isPageShow:false})
        })
      });
    }
    $form.reset();
  }
  render(){
    let attachedClasses=[classes.StartPage];
    if(this.props.isUserPresent)attachedClasses.push(classes.Close);
    return (
      <div className={attachedClasses.join(' ')}>
      <LogingStartPage submited={this.onSubmitedValueHandler}/>
        <RegisterPage
        chooseGender={this.onClickGenderBtnHandler}
        submited={this.onSubmitedValueHandler }/>
      </div>
    );
  }
}
const mapDispatchToProp=dispatch=>{
  return {
    loginUserFunction: (user)=>dispatch(loginUserAction(user)),
    registerUserFunction: (user)=>dispatch(registerUserAction(user))
  }
}
const mapStateToProp=state=>{
    return {
      isUserPresent: state.user.isUserPresent
    }
}
export default connect(mapStateToProp,mapDispatchToProp)(StartPage);

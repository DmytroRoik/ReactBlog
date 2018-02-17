import React,{Component} from 'react';
import classes from './StartPage.css';
import RegisterPage from './RegisterPage/RegisterPage';
import LogingStartPage from './LogingStartPage/LogingStartPage';
import { connect } from 'react-redux';
import { fetchLoginUser, fetchRegisterUser} from '../../actions/actionUser';

class StartPage extends Component{
  constructor(props){
    super(props);
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
      this.props.onfetchLoginUser(this.userValue);
    }
    else if($form.id==="registerForm"){
      const image = $form.querySelector(".ImagePreview img").src;
      this.userValue={
        username: $form.registerUsername.value,
        password: $form.registerPasword.value,
        firstName: $form.registerFirstName.value,
        lastName: $form.registerLastName.value,
        img: image,
        gender: this.gender
      }
      this.props.onfetchRegisterUser(this.userValue);
    }
    $form.reset();
  }
  render(){
    let attachedClasses=[classes.StartPage];
    if(this.props.isUserPresent){
      attachedClasses.push(classes.Close);
      setTimeout(()=>{
        this.props.history.push('/profile');

      },300);
    }
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
    onfetchLoginUser: (user)=>dispatch(fetchLoginUser(user)),
    onfetchRegisterUser: (user)=>dispatch(fetchRegisterUser(user))
  }
}
const mapStateToProp=state=>{
    return {
      isUserPresent: state.user.isUserPresent
    }
}
export default connect(mapStateToProp,mapDispatchToProp)(StartPage);

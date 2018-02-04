import React,{Component} from 'react';
import classes from './LoggerButton.css';
import LogWindow from './LogWindow/LogWindow';
import BackDrop from '../../UI/BackDrop/BackDrop';

import { connect } from 'react-redux';
import {loginUserAction,registerUserAction,logoutUserAction} from '../../../actions/actionUser'
import axios from 'axios';

class LoggerButton extends Component{
    constructor(props){
        super(props);
        this.state={
            isWindowOpen:false,
            isUserPresent:false
        }
        this.currentUserData={}
    }
    onBtnLoggerClickHandler=()=>{
        this.setState((prevState,prop)=>{
            return {isWindowOpen: !prevState.isWindowOpen}
        })
    }
    onInputUserValue=(e)=>{
      if(e.target.type==="password")
       this.currentUserData.password=e.target.value;
      else
       this.currentUserData.username=e.target.value;
    }

     onSubmitUserData=(e)=>{
      e.preventDefault();

      axios.post('https://koa-neo4j-blog.herokuapp.com/api/user/getuser',{username: "roichenko"})
      .then( response=> {
        this.currentUserData = {...JSON.parse(response.request.response)[0]._fields[0].properties };
        this.props.loginUserFunction(this.currentUserData)
      });
    }

    render(){
        return (
            <div className={classes.LoggerContainer}>
                <div onClick={this.onBtnLoggerClickHandler}
                    className={classes.LoggerButton}>
                </div >

                <div>
                <BackDrop clicked={this.props.onBtnLoggerClickHandler} show={this.props.isWindowOpen}/>
                    <LogWindow closeWindow={this.onBtnLoggerClickHandler}
                       show={this.state.isWindowOpen}
                       onInput onInputUserData={this.onInputUserValue}
                       onUserDataSubmit={this.onSubmitUserData}/>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps=dispatch=>{
  return {
    loginUserFunction: (user)=>dispatch(loginUserAction(user)),
    registerUserFunction: (user)=> dispatch(registerUserAction(user)),
    logoutUserActionFunction: (user)=>dispatch(logoutUserAction(user))
  }
}
const mapStateToProps=state=>{
  return{
    user: state.user.user
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoggerButton);

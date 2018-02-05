import React,{Component} from 'react';
import classes from './LoggerButton.css';
import LogWindow from './LogWindow/LogWindow';
import BackDrop from '../../UI/BackDrop/BackDrop';

import { connect } from 'react-redux';
import {logoutUserAction} from '../../../actions/actionUser';

class LoggerButton extends Component{
    constructor(props){
        super(props);
        this.state={
            isWindowOpen:false,
        }
    }

    onBtnLoggerClickHandler=()=>{
        this.setState((prevState,prop)=>{
            return {isWindowOpen: !prevState.isWindowOpen}
        })
    }
    onLogoutClickHandler=()=>{
      this.setState({isWindowOpen:false});
      this.props.logoutUserFunction();
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
                       onLogoutClick={this.onLogoutClickHandler}
                       />
                </div>
            </div>
        );
    }
}
const mapDispatchToProps=dispatch=>{
  return {
    logoutUserFunction: ()=>dispatch(logoutUserAction())
  }
}
const mapStateToProps=state=>{
  return{
    user: state.user.user
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoggerButton);

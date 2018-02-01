import React,{Component} from 'react';
import classes from './LoggerButton.css';
import LogWindow from './LogWindow/LogWindow';
import BackDrop from '../../UI/BackDrop/BackDrop';

class LoggerButton extends Component{
    constructor(props){
        super(props);
        this.state={
            isWindowOpen:false
        }
    }
    onBtnLoggerClickHandler=()=>{
        this.setState((prevState,prop)=>{
            return {isWindowOpen: !prevState.isWindowOpen}
        })
    }
    render(){
        return (
            <div className={classes.LoggerContainer}>
                <div onClick={this.onBtnLoggerClickHandler}
                    className={classes.LoggerButton}>
                </div >
                
                <div>
                <BackDrop clicked={this.props.onBtnLoggerClickHandler} show={this.props.isWindowOpen}/>
                    <LogWindow closeWindow={this.onBtnLoggerClickHandler} show={this.state.isWindowOpen}/>
                </div>
            </div>
        );
    }
}
export default LoggerButton;
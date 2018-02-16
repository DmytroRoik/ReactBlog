import React,{Component} from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import classes from './Layout.css';
import Menu from '../../components/Menu/AsideMenu';
import SideDrawer from '../../components/NavigationItems/SideDrawer/SideDrawer';

import Spinner from '../../components/UI/Spinner/Spinner';

class Layout extends Component{
  constructor(props){
    super(props);
    this.state={
      showSideDrawer:false
    }
  }

  sideDrawerClosedHandler=()=>{
    this.setState({ showSideDrawer:false})
  }
  sideDrawerToggleHandler=()=>{
    this.setState((prevState)=>{
      return {showSideDrawer: !prevState.showSideDrawer}
    })
  }
  render(){
    return (
      <div>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer open={this.state.showSideDrawer}
            closedClick={this.sideDrawerClosedHandler}/>
        <div className={classes.AsideMenu}>
        <Menu />
        </div>
        <Spinner show={this.props.isSpinnerShow}/>
          <div className={classes.Content}>

            {this.props.children}
          </div>
      </div>
    );
  }
}
export default Layout;

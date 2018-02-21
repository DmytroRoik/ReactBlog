import React, { Component } from 'react';
import classes from './App.css';
import Layout from './../containers/Layout/Layout';
import PostConstructor from '../components/Posts/PostConstructor/PostConstructor';
import PostList from '../containers/PostList/PostList';
import Profile from '../containers/Profile/Profile';
import StartPage from '../components/StartPage/StartPage';
import {loginUserAction} from '../actions/actionUser';


import {BrowserRouter,Switch,Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
class App extends Component {

  render() {
    this.props.tryLoginUserFromStorage();
    let routes=(
      <Switch>
        <Route path="/" exact component={StartPage}/>
        <Redirect to="/" />
      </Switch>
    );
    if(this.props.isUserAuthorized){
      routes=(
        <Switch>
            <Route path="/" exact component={StartPage}/>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/myposts" exact component={PostList}/>
            <Route path="/new-post" exact component={PostConstructor}  />
            <Route path="/posts" exact component={PostList}  />
          </Switch>
      );
    }
    return (

      <BrowserRouter>
        <Layout isSpinnerShow={this.props.isSpinnerActive}>
            {routes}
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state =>{
  return{
    isSpinnerActive: state.posts.isSpinnerActive,
    isUserAuthorized: state.user.isUserPresent
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    tryLoginUserFromStorage: ()=>{

      if(sessionStorage.getItem('user')!=="undefined"){
        const user=JSON.parse(sessionStorage.getItem('user'));
        if(user)dispatch(loginUserAction(user));
      }
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

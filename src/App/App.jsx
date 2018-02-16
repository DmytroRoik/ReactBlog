import React, { Component } from 'react';
import classes from './App.css';
import Layout from './../containers/Layout/Layout';
import PostConstructor from '../components/Posts/PostConstructor/PostConstructor';
import PostList from '../containers/PostList/PostList';
import Profile from '../containers/Profile/Profile';
import StartPage from '../components/StartPage/StartPage';

import {BrowserRouter,Switch,Route} from 'react-router-dom';
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Layout>
            <Route path="/" exact component={StartPage}/>
          <Switch>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/myposts" exact component={PostList}/>
            <Route path="/new-post" exact component={PostConstructor}  />
            <Route path="/posts" exact component={PostList}  />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;

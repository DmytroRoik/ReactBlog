import React, { Component } from 'react';
import classes from './App.css';
import Layout from './../containers/Layout/Layout';
import Aux from '../containers/hoc/Aux';
import PostConstructor from '../components/Posts/PostConstructor/PostConstructor';
import PostList from '../containers/PostList/PostList';
import Profile from '../containers/Profile/Profile';

import {BrowserRouter,Switch,Route} from 'react-router-dom';
class App extends Component {  
  
  render() {
    return (  
      <BrowserRouter>    
        <Layout>
            <Route path="/" exact component={PostList}/>
          <Switch>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/new-post" exact component={PostConstructor}  />
            <Route path="/posts" exact component={PostList}  />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;

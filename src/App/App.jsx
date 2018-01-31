import React, { Component } from 'react';
import classes from './App.css';
import Layout from './../containers/Layout/Layout';
import Aux from '../containers/hoc/Aux';
import PostConstructor from '../components/Posts/PostConstructor/PostConstructor';
import PostList from '../containers/PostList/PostList';
class App extends Component {  
  render() {
    return (      
      <Layout>
        <PostConstructor />
        <PostList/>
      </Layout>
    );
  }
}

export default App;

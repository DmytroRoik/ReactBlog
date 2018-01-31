import React from 'react';
import classes from './PostTemplate.css';

import Header from './PostHeader/PostHeader';
import Body from './PostBody/PostBody';
import Footer from './PostFooter/PostFooter';
const postTemplate=(props)=>(
  <div className={classes.PostTemplate}>
    <Header/>
    <Body/>
    <Footer/>
  </div>
);
export default postTemplate;

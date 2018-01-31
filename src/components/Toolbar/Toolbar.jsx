import React,{Component} from 'react';
import classes from './Toolbar.css';

import Logo from '../Logo/Logo';
import Categories from '../NavigationItems/Categories/Categories';
import SearchComponent from '../NavigationItems/SearchComponent/SearchComponent';

class Toolbar extends Component{
  render(){
    return(
      <header className={classes.Toolbar}>
        <Logo/>
        <Categories/>
        <SearchComponent/>
      </header>
    );
  }
}
export default Toolbar;

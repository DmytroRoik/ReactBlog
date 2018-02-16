import React,{Component} from 'react';
import classes from './Categories.css';
import CategoriesSlider from './CategoriesSlider/CategoriesSlider';
import { connect } from 'react-redux';
import { fetchCategories } from '../../../actions/actionCategory';
import { fetchAllPostsByCategory } from '../../../actions/actionPost';
import {withRouter }from 'react-router-dom';

class Categories extends Component{
  constructor(props){
    super(props);
    this.state={
      isCategoriesOpen:false,
    }
    this.activeCategory="";
  }

  mouseOverHandler(){
   // this.props.onFetchCategories();
    this.setState({isCategoriesOpen:true});
  }
  mouseOutHandler(){
    this.setState({isCategoriesOpen:false});
  }

  onCategoryClickHandler=(e)=>{
    this.activeCategory=e.target.textContent;
    if(this.props.location.pathname==="/home"){
      this.props.onfetchAllPostsByCategory(this.activeCategory,this.props.user.username);
    }
    else{
      this.props.onfetchAllPostsByCategory(this.activeCategory);
    }
    this.setState({isCategoriesOpen:false});
  }

  render(){
    return(
      <div
      onMouseOver={this.mouseOverHandler.bind(this)}
      onMouseOut={this.mouseOutHandler.bind(this)}>
        <div className={classes.Categories}>
           Categories
        </div>
          <CategoriesSlider
            categories={this.props.categories}
            onclicked={this.onCategoryClickHandler}
            show={this.state.isCategoriesOpen}
            />
      </div>
    );
  }
  componentWillMount(){
    this.props.onFetchCategories();
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    onFetchCategories: () => dispatch(fetchCategories()),
    onfetchAllPostsByCategory: (activeCategory, username) => dispatch(fetchAllPostsByCategory(activeCategory,username))
  }
}
const mapStateToProps=state=>{
  return{
    user:state.user.user,
    categories: state.categories.categories
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Categories));

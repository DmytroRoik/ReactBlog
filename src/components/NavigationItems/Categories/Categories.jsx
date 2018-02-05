import React,{Component} from 'react';
import classes from './Categories.css';
import CategoriesSlider from './CategoriesSlider/CategoriesSlider';
import axios from 'axios';
import { connect } from 'react-redux';
import {loadPostAction} from '../../../actions/actionPost';

class Categories extends Component{
  constructor(props){
    super(props);
    this.state={
      categories:["test4","test2","test3","test1"],
      isCategoriesOpen:false,
    }
    this.activeCategory="";
  }

  mouseOverHandler(){
    axios.get("https://koa-neo4j-blog.herokuapp.com/api/category/getall")
    .then((response)=>{
      this.setState({categories:[...response.data]});
    })
   return this.setState({isCategoriesOpen:true});
  }
  mouseOutHandler(){
    return this.setState({isCategoriesOpen:false});
  }

  onCategoryClickHandler=(e)=>{
    this.activeCategory=e.target.textContent;
    axios.post("https://koa-neo4j-blog.herokuapp.com/api/category/getallposts",{name:this.activeCategory})
    .then((response)=>{
      this.props.loadPostFunction(response.data);
    }).catch(error=>{
      console.log(error);
    })
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
            categories={this.state.categories}
            onclicked={this.onCategoryClickHandler}
            show={this.state.isCategoriesOpen}
            />
      </div>
    );
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    loadPostFunction:(posts)=>dispatch(loadPostAction(posts))
  }
}
export default connect(null,mapDispatchToProps)(Categories);

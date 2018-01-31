import React,{Component} from 'react';
import classes from './Categories.css';
import CategoriesSlider from './CategoriesSlider/CategoriesSlider';

class Categories extends Component{
  constructor(props){
    super(props);
    this.state={
      categories:["test1","test1","test1","test1"],
      isCategoriesOpen:false
    }
  }

  mouseOverHandler(){
   return this.setState({isCategoriesOpen:true});
  }
  mouseOutHandler(){
    return this.setState({isCategoriesOpen:false});
   }
  render(){
    return(
      <div 
      onMouseOver={this.mouseOverHandler.bind(this)} 
      onMouseOut={this.mouseOutHandler.bind(this)}>
        <div className={classes.Categories}>
           Categories
        </div>
          <CategoriesSlider show={this.state.isCategoriesOpen}/>
      </div>
    );
  }
}
export default Categories;

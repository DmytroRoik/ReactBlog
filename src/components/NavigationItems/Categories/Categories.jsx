import React,{Component} from 'react';
import classes from './Categories.css';
import CategoriesSlider from './CategoriesSlider/CategoriesSlider';
import axios from 'axios';
import { connect } from 'react-redux';
import {loadPostAction} from '../../../actions/actionPost';
import {withRouter }from 'react-router-dom';

class Categories extends Component{
  constructor(props){
    super(props);
    this.state={
      categories:[],
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
      let result=response.data;
      this.props.loadPostFunction([]);
      if(this.props.location.pathname==="/"){
        result=result.filter((post)=>post.author===this.props.user.username);
      }
      let fullPosts=[];
      result.forEach (post=>{
        axios.post('https://koa-neo4j-blog.herokuapp.com/api/user/getuser',{username: post.author})
          .then(res=>{
            let item={...post}
            item.author = res.data[0]["_fields"][0].properties.firstName + " " +res.data[0]["_fields"][0].properties.lastName;
            item.avatar = res.data[0]["_fields"][0].properties.img;

            fullPosts.push(item)///fix later
            this.props.loadPostFunction(fullPosts);
          })
      })


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
const mapStateToProps=state=>{
  return{
    user:state.user.user
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Categories));

import React,{Component} from 'react';
import classes from './SearchComponent.css';
import SearchResultItems from './SearchResultItems/SearchResultItems';

class SearchComponent extends Component{
  constructor(props){
    super(props);
    this.state={
      SearchResults:[
        "asd",
        "asdasdassdd",
        "asdfssdfasfweff"
      ],
      isOpen:false
    }  
  }

  onSearchInputHandler(e){
    //todo:send ajax
    //e.target.value
    if(e.target.value===""||e.target.value.length==0){
      this.setState({isOpen:false});
      this.setState({searchResults:[]});
    }else{
      this.setState({isOpen:true});
      this.setState({SearchResults:[e.target.value]});
    }
  }
  
  render(){
    return (
      <div>
        <div className={classes.SearchComponent}>
          <input type="text" placeholder="search" onInput={(e)=>this.onSearchInputHandler(e)} />
          <button><i className="material-icons">search</i></button>
        </div>
          { !this.state.isOpen
            ?null
            :<SearchResultItems searchResult={this.state.SearchResults}/>} 
        </div>
    );
  }
}
export default SearchComponent;

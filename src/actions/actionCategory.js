import axios from 'axios';

export const loadCategories = (categories) => {
  return {
      type: "LOAD_CATEGORIES",
      payload: categories
  }
}

export const fetchCategories = () => {
  return dispatch=> {
    axios.get("https://koa-neo4j-blog.herokuapp.com/api/category/getall")
    .then((response)=>{
      dispatch(loadCategories(response.data));
    })

  }
}

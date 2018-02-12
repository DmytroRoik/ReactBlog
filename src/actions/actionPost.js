import axios from 'axios';

export const createPostAction = (post) => {
  return {
    type: "CREATE_POST",
    payload: post
  }
}
export const editPostAction = (post) => {
  return {
    type: "EDIT_POST",
    payload: post
  }
}

export const deletePostAction = (post) => {
  return {
    type: "DELETE_POST",
    payload: post
  }
}
export const enableEditionPostAction = (post) => {
  return {
    type: "ENABLE_EDITION_POST",
    payload: post
  }
}
export const loadPostAction = (posts) => {
  return {
    type: "LOAD_POSTS",
    payload: posts
  }
}

/////////
///Async functions
///

const addAuthorInfoToPost = (dispatch, posts) =>{
  const promises=[];
  const fullPosts=[...posts];
  posts.forEach (post=>{
    promises.push(axios.post('https://koa-neo4j-blog.herokuapp.com/api/user/getuser',{username: post.author}));
  });

  Promise.all(promises)
  .then(authors=>{
    authors.forEach( (el,i) => {
      fullPosts[i].author = el.data[0]["_fields"][0].properties.firstName + " " +el.data[0]["_fields"][0].properties.lastName;
      fullPosts[i].avatar = el.data[0]["_fields"][0].properties.img;
    });

    dispatch(loadPostAction(fullPosts));
  });
}


export const fetchAllPost = (username) =>{
  return dispatch =>{
    axios.get('https://koa-neo4j-blog.herokuapp.com/api/post/getall')
    .then(response=>{
      addAuthorInfoToPost(dispatch, response.data);
    })
    .catch(err=>{
      console.log(err);
    });
  }
}

export const fetchAllPostByAuthor = username =>{
  return dispatch =>{
    axios.post('https://koa-neo4j-blog.herokuapp.com/api/user/getallposts',{username: username})
    .then(res=>{
      addAuthorInfoToPost( dispatch, res.data);
    }).catch(err=>{
      console.log(err);
    })

  }
}

export const fetchAllPostsByCategory=(activeCategory,username)=>{
  return dispatch => {
    axios.post("https://koa-neo4j-blog.herokuapp.com/api/category/getallposts",{name: activeCategory})
    .then((response)=>{

      let result=response.data;
      if(username){
        result=result.filter((post)=>post.author===username);
      }
      addAuthorInfoToPost(dispatch,result);
    })
  }
}

export const fetchCreatePost = ( post, token ) =>{
  const { title, img, content, category } = post;
  return dispatch =>{

    axios.post('https://koa-neo4j-blog.herokuapp.com/api/post/new',{
       title, img, content, category },
    {
      headers: {
          'Authorization': token,
    }
})
  .then(res=>{
    dispatch( createPostAction(post) );
  })
  .catch(err=>{
    console.error(err);
  })
  }
}

export const fetchUpdatePost = ( post, token) =>{
  const {title, img, content, category} = post;
  return dispatch =>{
    axios.put('https://koa-neo4j-blog.herokuapp.com/api/post/update',{
    title, img, content, category
  },
  {
    headers: {
      'Authorization': token,
    }
  })
  .then( response =>{
    dispatch ( editPostAction(response.data) );
  })
  .catch( error=>{
    console.log(error);
  });
}
}

export const fetchDeletePost = ( post, token) =>{
  return dispatch =>{
    axios.post('https://koa-neo4j-blog.herokuapp.com/api/post/delete', {
    title: post.title
  },
  {
    headers: {
      'Authorization': token,
    }
  })
  .then(response=>{
    dispatch( deletePostAction(post) );
  })
  .catch(error=>{
    console.log(error)
  })
}
}



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
export const toggleLoadingSpinner = (isShow)=>{
  return {
    type: "TOGGLE_SPINNER",
    payload: isShow
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
    })
    dispatch(loadPostAction(fullPosts));
  })
  .catch(e=>{
    dispatch(toggleLoadingSpinner(false));
  });
}

const addMyInfoToPost = (dispatch, posts) =>{
  const fullPosts=[...posts];

  let user={};
  axios.post('https://koa-neo4j-blog.herokuapp.com/api/user/getuser',{username: posts[0].author})
  .then(res=>{
      user.author = res.data[0]["_fields"][0].properties.firstName + " " +res.data[0]["_fields"][0].properties.lastName;
      user.avatar = res.data[0]["_fields"][0].properties.img;
      fullPosts.forEach (post=>{
        post.author=user.author;
        post.avatar=user.avatar;
      });
      dispatch(loadPostAction(fullPosts));
  })
}


export const fetchAllPost = (username) =>{
  return dispatch =>{
    axios.get('https://koa-neo4j-blog.herokuapp.com/api/post/getall')
    .then(response=>{
      addAuthorInfoToPost(dispatch, response.data);
    })
    .catch(err=>{
      dispatch(toggleLoadingSpinner(false));
    });
  }
}

export const fetchAllPostByAuthor = username =>{
  return dispatch =>{
    axios.post('https://koa-neo4j-blog.herokuapp.com/api/user/getallposts',{username: username})
    .then(res=>{
      addMyInfoToPost( dispatch, res.data);
    }).catch(err=>{
      dispatch(toggleLoadingSpinner(false));
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
    .catch(e=>{
      dispatch(toggleLoadingSpinner(false));
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
    alert("Post wasn`t been created");
    dispatch(toggleLoadingSpinner(false));
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
    dispatch ( editPostAction(post) );
  })
  .catch( error=>{
    dispatch(toggleLoadingSpinner(false));
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
    alert("Post wasn`t been deleted");
    dispatch(toggleLoadingSpinner(false));
  })
}
}



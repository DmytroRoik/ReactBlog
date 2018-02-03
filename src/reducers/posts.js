const initialState={
  posts:[{
    author: "testuser",
    title: "titleTest",
    content: "123eqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
    img: "http://kb4images.com/images/picture/37509081-picture.jpg",
    category: "1488",
    editablePost:false
  }]
}

export default function posts(state=initialState,action){
  switch(action.type){
    case "CREATE_POST":{
      let post={...action.payload}
      post.editablePost=false;
      return {
        ...state,
         posts:[...state.posts, post]
        }
    }

    case "EDIT_POST":{
      let index=state.posts.indexOf(action.payload);
      let newPosts=[...state.posts];
      newPosts.splice(index,1,action.payload);
      return {
        ...state,
        posts: newPosts
      }
    }

    case "DELETE_POST":{
      let index=state.posts.indexOf(action.payload);
      let newPosts=[...state.posts];
      newPosts.splice(index,1);
      return {
        ...state,
        posts: newPosts
      }
    }
    case "ENABLE_EDITION_POST":{
       let newPosts=[...state.posts];
       newPosts[0].editablePost=true;
      // for(let i=0;i<newPosts.length;i++){
      //   if(newPosts[i].title===action.payload.title)
      //     newPosts[i].editablePost=true;              //bug
      // }
      // console.log(newPosts)
      return {
        ...state,
         posts:[ ...newPosts]
        }
    }

    default:
      return state;
  }
}


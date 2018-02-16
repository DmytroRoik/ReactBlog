const initialState = {
    posts: [],
   // isSpinnerActive: false
}

export default function posts(state = initialState, action) {
    switch (action.type) {
        case "CREATE_POST":
            {
                let newPost = {...action.payload }
                newPost.editablePost = false;
                if (state.posts.some((post) => post.title === newPost.title)) {
                    alert('post duplicate');
                    return state;
                }
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                    isSpinnerActive:false
                }
            }

        case "EDIT_POST":
            {
                let index = state.posts.indexOf(action.payload);

                for (let i = 0; i < state.posts.length; i++) {
                    if (state.posts[i].title === action.payload.title) {
                        index = i;
                        break;
                    }
                }
                let selectedPost = {...action.payload, editablePost: false }
                let newPosts = [...state.posts];
                newPosts.splice(index, 1, {...selectedPost });
                return {
                    ...state,
                    posts: newPosts,
                    isSpinnerActive:false
                }
            }

        case "DELETE_POST":
            {
                let index = -1;
                for (let i = 0; i < state.posts.length; i++) {
                    if (state.posts[i].title === action.payload.title) {
                        index = i;
                    }
                }
                let newPosts = [...state.posts];
                newPosts.splice(index, 1);
                return {
                    ...state,
                    posts: newPosts,
                    isSpinnerActive:false
                }
            }
        case "ENABLE_EDITION_POST":
            {
                let newPosts = [...state.posts];
                newPosts[0].editablePost = true;
                for (let i = 0; i < newPosts.length; i++) {
                    if (newPosts[i].title === action.payload.title)
                        newPosts[i].editablePost = true;
                    else newPosts[i].editablePost = false;
                }
                return {
                    ...state,
                    posts: [...newPosts]
                }
            }
        case "LOAD_POSTS":
            {
                return {
                    ...state,
                    posts: [...action.payload],
                    isSpinnerActive:false
                }
            }
        case "TOGGLE_SPINNER":{
          return{
            ...state,
            isSpinnerActive:action.payload
          }
        }

        default:
            return state;
    }
}

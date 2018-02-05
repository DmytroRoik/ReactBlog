const initialState = {
    posts: [{
        author: "admin",
        title: "Hello everybody",
        content: "Hello everybody",
        img: "http://kb4images.com/images/picture/37509081-picture.jpg",
        category: "cursor",
        editablePost: false
    }]
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
                    posts: [...state.posts, newPost]
                }
            }

        case "EDIT_POST":
            {
                let index = state.posts.indexOf(action.payload);
                let newPosts = [...state.posts];
                newPosts.splice(index, 1, action.payload);
                return {
                    ...state,
                    posts: newPosts
                }
            }

        case "DELETE_POST":
            {
                let index = state.posts.indexOf(action.payload);
                let newPosts = [...state.posts];
                newPosts.splice(index, 1);
                return {
                    ...state,
                    posts: newPosts
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
                console.log(newPosts)
                return {
                    ...state,
                    posts: [...newPosts]
                }
            }
        case "LOAD_POSTS":
            {
                return {
                    ...state,
                    posts: [...action.payload]
                }
            }

        default:
            return state;
    }
}
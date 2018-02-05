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
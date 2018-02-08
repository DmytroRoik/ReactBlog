import axios from 'axios';

const initialState = {
    user: {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        img: "",
        gender: ""
    },
    isUserPresent: false
}

export default function user(state = initialState, action) {
    switch (action.type) {

        case "LOGIN_USER":
            {
                axios.post('https://koa-neo4j-blog.herokuapp.com/api/user/signin', {
                    username: action.payload.username,
                    password: action.payload.password
                })
                .then((response) => sessionStorage.setItem('accessToken', response.data.data));
                return {
                    ...state,
                    user: {
                        ...action.payload
                    },
                    isUserPresent: true
                }
            }

        case "LOG_OUT":
            {
                sessionStorage.clear();
                return {
                    ...state,
                    user: null,
                    isUserPresent: false
                }
            }

        case "REGISTER_USER":
            {
                axios.post('https://koa-neo4j-blog.herokuapp.com/api/user/signup', action.payload)
                .then(function(response) {
                    sessionStorage.setItem('accessToken', response.data.data);
                })
                .catch(function(error) {
                    console.log(error);
                    return state;
                });

                return {
                    ...state,
                    user: {...action.payload }
                }
            }

        default:
            return state;
    }
}
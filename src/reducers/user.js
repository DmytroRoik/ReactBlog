const initialState = {
  user: {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    img: "",
    gender: ""
  },
  isUserPresent: false,
}

export default function user(state = initialState, action) {
  switch (action.type) {

    case "LOGIN_USER":
    {
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
    case "EDIT_USER":
    {
      let user={...state.user}
      for(let key in action.payload){
        if(action.payload[key]){
          user[key]=action.payload[key]
        }
      }
      return{
        ...state,
        user:user
      }
    }
    default:
    return state;
  }
}

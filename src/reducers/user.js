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

    default:
    return state;
  }
}

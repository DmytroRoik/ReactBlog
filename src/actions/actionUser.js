import axios from 'axios';

export const loginUserAction = (user) => {
    return {
        type: "LOGIN_USER",
        payload: user
    }
}

export const logoutUserAction = () => {
    return {
        type: "LOG_OUT"
    }
}


export const fetchLoginUser = (userData) =>{
  return dispatch => {
    axios.post('https://koa-neo4j-blog.herokuapp.com/api/user/signin',userData)
    .then(response=>{
        let token=response.data.data;
        sessionStorage.setItem('accessToken',token);
        dispatch( loginUserAction(response.data.user) )
    })
    .catch(error=>console.log(error));

  }
}

export const fetchRegisterUser = (userValue) =>{
  return dispatch =>{

    axios.post('https://koa-neo4j-blog.herokuapp.com/api/user/signup',userValue)
    .then(response=>{

      setTimeout(()=>{
      axios.post('https://koa-neo4j-blog.herokuapp.com/api/user/signin',userValue)
      .then(res=>{
        let token=response.data.data;
          sessionStorage.setItem('accessToken',token);

        dispatch(loginUserAction(userValue));
      })
    },1000);
    })
    .catch(err=>{
      alert("User is already exists");
    });
  }
}

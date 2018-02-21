import axios from 'axios';

export const editUserAction = (user)=>{
  return {
    type: "EDIT_USER",
    payload: user
  }
}

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
        sessionStorage.setItem('user',JSON.stringify(response.data.user));
        dispatch( loginUserAction(response.data.user) )
    })
    .catch(error=>alert("Password or login is incorrect!"));

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
          sessionStorage.setItem('user',JSON.stringify(response.data.user));
        dispatch(loginUserAction(userValue));
      })
    },1000);
    })
    .catch(err=>{
      alert("User is already exists");
    });
  }
}

export const fetchEditUser = (userValue) =>{
  const token=sessionStorage.getItem('accessToken');
  return dispatch =>{

    axios.post('https://koa-neo4j-blog.herokuapp.com/api/user/update',
    userValue,
    {
      headers: {
        'Authorization': token,
      }
    })
    .then(response=>{
      console.log(response);
      //dispatch(editUserAction())
    })
    .catch(err=>{

    });
  }
}

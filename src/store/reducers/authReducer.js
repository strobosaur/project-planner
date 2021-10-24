const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action){
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: null
      }
    case 'SIGNOUT_SUCCESS':
      console.log('sign out success');
      return state;
    default:
      return state;
  }
}

export default authReducer;
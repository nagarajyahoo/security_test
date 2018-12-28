import axios from '../../interceptors/Axios';

export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const PROCESSING = 'PROCESSING';
export const DUMMY_LOGIN = 'DUMMY_LOGIN';

const loginSuccessful = (authData) => {
    return {type: LOGIN_SUCCESSFUL, data: authData}
};

const processing = () => {
    return {type: PROCESSING}
};

const loginFailure = (reason) => {
    return {type: LOGIN_FAILURE, data: reason}
};

const loginForTesting = (isLogin) => {
    return {
        type: DUMMY_LOGIN,
        data: isLogin
    }
};

export const dummyLogin = (isLogin) => {
  return (dispatch => {
      dispatch(loginForTesting(isLogin));
  });
};

export const login = (userId, password) => {
    const loginRequest = {
        username: userId,
        password: password
    };

    return (dispatch => {
        dispatch(processing());

        axios.post('/login', loginRequest)
            .then(res => {
                console.log(res);
                dispatch(loginSuccessful(res.data))
            })
            .catch(error => {
                console.log(error);
                dispatch(loginFailure(error.message))
            })
    });
};
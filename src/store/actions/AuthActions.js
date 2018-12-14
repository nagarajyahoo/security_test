import axios from '../../interceptors/Axios';

export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const PROCESSING = 'PROCESSING';

export const loginSuccessful = (authData) => {
    return {type: LOGIN_SUCCESSFUL, data: authData}
};

export const processing = () => {
    return {type: PROCESSING}
};

export const loginFailure = (reason) => {
    return {type: LOGIN_FAILURE, data: reason}
};

export const login = (userId, password) => {
    processing();

    const loginRequest = {
        userId: userId,
        password: password
    };

    return (dispatch => {
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
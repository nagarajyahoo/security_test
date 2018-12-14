import * as Actions from '../actions/AuthActions';

const initialState = {
    token: null,
    userId: null,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.LOGIN_SUCCESSFUL:
            return {
                ...initialState,
                token: action.data.token
            };
        case Actions.LOGIN_FAILURE:
            return {
                ...initialState,
                error: action.data
            };
        default:
            return state;
    }
};

export default authReducer;

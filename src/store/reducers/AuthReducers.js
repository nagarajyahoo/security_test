import * as Actions from '../actions/AuthActions';

const initialState = {
    token: null,
    userId: null,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.PROCESSING:
            return {
                ...state,
                error: undefined
            };
        case Actions.LOGIN_SUCCESSFUL:
            return {
                ...state,
                token: action.data.token
            };
        case Actions.LOGIN_FAILURE:
            return {
                ...state,
                error: action.data
            };
        default:
            return state;
    }
};

export default authReducer;

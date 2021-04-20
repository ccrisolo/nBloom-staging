import * as auth from "../actions/auth";
const initialState = {
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case auth.AUTHENTICATE: {
            return { ...state, isAuth: action.payload };
        }
        default: {
            return { ...state }
        }
    }
}

export default authReducer
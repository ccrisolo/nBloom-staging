import * as acc from "../actions/account";
const initialState = {
    email: '',
    password: '',
    dob: '',
    name: '',
    work: '',
    journeyType: ''
};

const acReducer = (state = initialState, action) => {
    switch (action.type) {
        case acc.UPDATE_USER_CREDENTIALS: {
            return { ...state, ...action.payload };
        }
        default: {
            return { ...state }
        }
    }
}

export default acReducer
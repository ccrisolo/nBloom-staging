import * as ui from "../actions/UI";

const intialState = {
    accountPageContext: 'login'
};
const uiReducer = (state = intialState, actions) => {
    switch (actions.type) {
        case ui.CHANGE_PAGE_ACCOUNT_CONTEXT:{
            return {...state,accountPageContext:actions.payload}
        }
        default:
            return state;
    }
};

export default uiReducer;

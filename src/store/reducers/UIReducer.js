import * as ui from "../actions/UI";

const intialState = {
    accountPageContext: 'login',
    showNavBar: true,
};
const uiReducer = (state = intialState, actions) => {
    switch (actions.type) {
        case ui.CHANGE_PAGE_ACCOUNT_CONTEXT: {
            return { ...state, accountPageContext: actions.payload }
        }
        case ui.SHOW_HIDE_NAVBAR: {
            return { ...state, showNavBar: actions.payload }
        }
        default:
            return state;
    }
};

export default uiReducer;

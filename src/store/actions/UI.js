export const CHANGE_PAGE_ACCOUNT_CONTEXT = "CHANGE_PAGE_ACCOUNT_CONTEXT"
export const SHOW_HIDE_NAVBAR = "SHOW_HIDE_NAVBAR";

export const changeAccountPageContext = (data) => ({
    type: CHANGE_PAGE_ACCOUNT_CONTEXT,
    payload: data
})

export const toggleNavbar = (data) => ({
    type: SHOW_HIDE_NAVBAR,
    payload: data
})

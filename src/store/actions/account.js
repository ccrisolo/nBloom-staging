export const UPDATE_USER_CREDENTIALS = "UPDATE_USER_CREDENTIALS"

export const updateUserCred = (data) => {
    return {
        type: UPDATE_USER_CREDENTIALS,
        payload: data
    }
}
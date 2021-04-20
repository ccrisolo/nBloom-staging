export const AUTHENTICATE = "AUTHENTICATE"

export const authenticate = (data) => {
    return {
        type: AUTHENTICATE,
        payload: data
    }
}
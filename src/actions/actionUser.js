export const loginUserAction = (user) => {
    return {
        type: "LOGIN_USER",
        payload: user
    }
}
export const registerUserAction = (user) => {
    return {
        type: "REGISTER_USER",
        payload: user
    }
}
export const logoutUserAction = () => {
    return {
        type: "LOG_OUT"
    }
}
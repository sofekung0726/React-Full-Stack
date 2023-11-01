const getLocalRefreshToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.refreshToken
}

const getLocalAccessToken = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.accessToken
}

const setLocalAccessToken = (token) => {
    const user = JSON.parse(localStorage.setItem("user"))
    user.accessToken = token
    localStorage.setItem("user", JSON.stringify(user))
}
// const setLocalAccessToken = (token) =>{
//     const user = { accessToken: token };
//     localStorage.setItem("user", JSON.stringify(user));
// }

const getUser = () => {
    return JSON.parse(localStorage.setItem("user"))
}
const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user))
}
const removeUser = () => {
    localStorage.removeItem("user")
}

const TokenService = {
    getLocalAccessToken,
        getLocalRefreshToken,
        setLocalAccessToken,
        getUser,
        setUser,
        removeUser
}
export default TokenService;
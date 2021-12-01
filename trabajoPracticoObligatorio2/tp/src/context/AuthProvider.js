import AuthContext from "./AuthContext";
import React, {useState} from 'react'

function AuthProvider(props){
    const [userLogin, SetUserLogin] = useState(localStorage.getItem("login"))

    const [userInfo, setUserInfo] = useState(JSON.parse(localStorage.getItem("userInfo")))

    const loginUser = (userInfo) => {
        localStorage.setItem("login",true)
        localStorage.setItem("userInfo",JSON.stringify(userInfo))
        SetUserLogin(true)
        setUserInfo(userInfo)
    }

    const logOutUser = () => {
        localStorage.removeItem("login")
        localStorage.removeItem("userInfo")
        SetUserLogin(false)
        setUserInfo({})

    }
    
    return(
        <AuthContext.Provider
        value = {{
            userLogin,
            loginUser,
            logOutUser,
            userInfo
        }}
        >
            {props.children}

        </AuthContext.Provider>
    )
}

export default AuthProvider
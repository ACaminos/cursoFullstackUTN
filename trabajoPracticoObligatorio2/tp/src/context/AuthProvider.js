import AuthContext from "./AuthContext";
import React, {useState} from 'react'

function AuthProvider(props){
    const [userLogin, SetUserLogin] = useState(false)

    const loginUser = () => {
        SetUserLogin(true)
    }

    const logOutUser = () => {
        SetUserLogin(false)
    }
    
    return(
        <AuthContext.Provider
        value = {{
            userLogin,
            loginUser,
            logOutUser
        }}
        >
            {props.children}

        </AuthContext.Provider>
    )
}

export default AuthProvider
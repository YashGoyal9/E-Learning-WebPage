import React from "react";
import Template from "../components/Template";

const Login=({setIsLoggedIn})=>{
    return(
        <Template
        title="Welcome Back"
        desc1="Build skills for today, tomorrow and beyond."
        desc2="Education to future-proof your career."
        formType="login" 
        setIsLoggedIn={setIsLoggedIn}       
        />
    )
}

export default Login;
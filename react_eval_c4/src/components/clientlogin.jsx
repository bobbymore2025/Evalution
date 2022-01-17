
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authcontext";

export const ClientLogin =()=>{

    
    const {handleToken} = useContext(AuthContext);

    const Navigate = useNavigate()


    return ( 
    <div id="Login">
                <h1>Login</h1>
                <input  name="email" type='text' placeholder="Email" />
                <input  name="password" type='password' placeholder="Password" />
                <button onClick={()=>{
                handleToken("123");
                Navigate(-1) }} >
                    Login
                </button>
            
      </div>
    );
}
import { useContext, useRef } from "react";
import "./login.css";
import { logincall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext"

import CircularProgress from '@mui/material/CircularProgress';


const Login = () => {
  const email = useRef();
  const password = useRef();
  const {user ,isFetching , error , dispatch} = useContext(AuthContext)
  
  const handleSubmit = ( e) =>{
    console.log(email.current.value)
    e.preventDefault();
    logincall({email:email.current.value , password: password.current.value} ,dispatch )
  }
  console.log(user)
 

  return (
    <>
      <div className="login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Chat Messenger</h3>
            <span className="loginDesc">
              Connect With friends and the world around you on Chat Messenger.
            </span>
          </div>
          <div className="loginRight">
            <form className="loginBox" onSubmit={handleSubmit}>
              <input
                placeholder="Email"
                type="email"
                required
                className="loginInput"
                ref={email}
                
              />
              <input
                placeholder="Password"
                type="password"
                required
                minLength="6"
                className="loginInput"
                ref={password}
              />
              <button
                className="loginButton"
                type="submit"
                
              >
                 { isFetching ?  (<CircularProgress sx={{color: 'white'}}  />) : "Log In" }
                
              
              </button>

              {/* <Link to="/register"> */}
                <button className="loginRegisterButton">
                  {/* {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : ( */}
                  Create a New Account
                  {/* )} */}
                </button>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

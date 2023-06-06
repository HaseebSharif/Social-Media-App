import "./register.css";
import { useRef } from "react";
import axios from 'axios'
import { Link , useNavigate  } from "react-router-dom";




const Register = () => {

  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate  = useNavigate();





  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
          await axios.post("http://localhost:8800/api/auth/register", user);
          navigate('/login')
        console.log('User Registered Successfully' , user)
        
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <div className="register">
        <div className="registerWrapper">
          <div className="registerLeft">
            <h3 className="registerLogo">Chat Messenger</h3>
            <span className="registerDesc">
              Connect With friends and the world around you on Chat Messenger.
            </span>
          </div>
          <div className="registerRight">
            <form className="registerBox" onSubmit={handleClick} >
              <input
                placeholder="Username"
                required
                ref={username}
                
                className="registerInput"
              />
              <input
                placeholder="Email"
                required
                ref={email}
               
                className="registerInput"
                type="email"
              />
              <input
                placeholder="Password"
                required
                ref={password}
                className="registerInput"
                type="password"
                minLength="6"
              />
              <input
                placeholder="Password Again"
                required
                ref={passwordAgain}
                className="registerInput"
                type="password"
              />
              <button  className="registerButton" type="submit">
                Sign Up
              </button>
              {/* <Link to="/"> */}
              <Link to='/login'>
                <button className="registerRegisterButton">
                  Log into Account
                </button>
                </Link>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

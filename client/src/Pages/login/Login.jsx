import { Context } from "../../context/Context";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useRef, useContext } from "react";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef()
  const {dispatch, isFetching} = useContext(Context)

  //define handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: userRef.current.value,
        password:passwordRef.current.value,
      });
      dispatch({type:"LOGIN_SUCCESS", payload:res.data});

    }catch(err) {
      dispatch({type:"LOGIN_FAILURE"});

    }
  };
 
  return (
    <>
    <div className="login">
        <h3 className="loginTitle">login</h3>
        <form className="loginForm" onSubmit={handleSubmit}>
            <label>username</label>
            <input type="text" className="loginInput"
            ref={userRef}
            />
            <label>password</label>
            <input type="password" className="loginInput"
            ref={passwordRef}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              login</button>
        </form>
        <button className="registerButton">
          <Link className="registerUpdatebtn" to="/register">register now</Link>

        </button>
      
    </div>
    </>
  )
}

export default Login

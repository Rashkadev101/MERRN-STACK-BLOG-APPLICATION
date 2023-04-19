import { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error, setError] = useState(false);

 //define handleSubmit
 const handleSubmit = async (e) => {
  e.preventDefault();
  setError(false);
  try {

  
  const res = await axios.post("http://localhost:5000/api/auth/register", {
    username,
    email,
    password,
  });
  res.data && window.location.replace("/login")
}catch(err) {
  setError(true)
}
 
 };


  return (
    <>
    <div className="register">
        <h3 className="registerTitle">register</h3>
        <form className="registerForm" onSubmit={handleSubmit}>
            <label>username</label>
            <input type="text" className="registerInput"
            onChange={e=>setUsername(e.target.value)}
            />
            <label>email</label>
            <input type="email" className="registerInput"
            onChange={e=>setEmail(e.target.value)}
            />
            <label>password</label>
            <input type="password" className="registerInput"
            onChange={e=>setPassword(e.target.value)}
            />
            <button className="btnRegister" type="submit">Register</button>
        </form>
        <button className="btnLogin">
          <Link className="btnUpdateLogin" to="/login">login</Link>
        </button>
        {error &&<span className="fetchError">Something went wrong!</span>}
      
    </div>
    </>
  )
}

export default Register;

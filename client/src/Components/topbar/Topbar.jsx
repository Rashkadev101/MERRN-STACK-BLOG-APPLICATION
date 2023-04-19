import { useContext } from "react";
import"./Topbar.css";
import {  FaBlog, FaHome, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";


const Topbar = () => {
    //create psedue user
    const {user, dispatch} = useContext(Context);
    const PF = "http://localhost:5000/images/"

    //define handleLogout
    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
    }
  return (
    <div className="top">
        <div className="topLeft">
            <div className="logo">
            <FaBlog className="blogIcon"/>
            <h2>rashka <span>blogger</span></h2>
            </div>

        </div>
        <div className="topCenter">
            <div className="topNav">
            <ul className="navList">
                <div className="homeIcon">
                <FaHome/>
                <Link className="topbarLinkHome" to="/"> home</Link>
                </div>
                
                <Link className="topbarLinkAbout" to="/about">about</Link>
                <Link className="topbarLinkContact" to="/contact">contact us</Link>
                <div className="blogCreateI">
                    <FaBlog/>
                    <Link className="topbarLinkCreate" to="/createblog">create blog</Link>
                </div>
                
                <li className="topbarLink" onClick={handleLogout}>{user && "LOGOUT"}</li>
            </ul>
            </div>
        </div>
        <div className="topRight">
            { user ? (
                    <Link to="/settings">
                           <div className="topAvater">
                <img src={PF + user.profilePic} alt="" className="topImg"/>
                <h3 className="userText">{user.username}</h3>
                <FaSearch className="searchIcon"/>
                </div>
                </Link>
                 

                ) : (
                    <ul className="topbarButtons">
                        <li>
                            <Link className="topbarLogin" to="/login">login</Link>
                        </li>
                        <li>
                            <Link className="topbarRegister" to="/register">register</Link>
                        </li>

                    </ul>
                )
            }
            
        </div>
      
    </div>
  )
}

export default Topbar

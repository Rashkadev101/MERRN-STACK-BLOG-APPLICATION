import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Sidebar.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:5000/api/categories")
      setCats(res.data)
    }
    getCats();
  
  }, [])
  return (
    <div className="sidebar">
       <div className="sidebarItem">
        <h3>about me</h3>
        <img src="image/r.jpg" alt="" className="sidebarImg"/>
        <p>Hello,magacaygu waa Dahir abdirashid Waxaan ahay Full-stack developer iyo UI/UX, designer.</p>
       </div>

       <div className="sidebarCategories">
        <h3>categories</h3>
        <ul className="sidebarList">
          {cats.map((c) =>(
            <Link to={`/?cat=${c.name}`} className="catLink">
               <li key={cats.length} className="sidebarListItem">{c.name}</li>
               
            </Link>
            

          ))}
          {/** */}

          {/** */}
           
            
        </ul>
       </div>
       <div className="sidebarSocial">
        <h4>follow me</h4>
        <div className="socialMedia">
            <FaFacebook className="sidebarIcon"/>
            <FaInstagram className="sidebarIcon"/>
            <FaLinkedin className="sidebarIcon"/>
            <FaTwitter className="sidebarIcon"/>
            
        </div>
       </div>
      
    </div>
  )
}

export default Sidebar

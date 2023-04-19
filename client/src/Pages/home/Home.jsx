import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Components/header/Header";
import Posts from "../../Components/posts/Posts";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./Home.css";
import axios from "axios";



const Home = () => { 
  const [posts,setPosts] = useState([]);
  const {search} = useLocation();
  
  useEffect(()=>{
    const getPosts = async ()=>{
     const res = await  axios.get("http://localhost:5000/api/posts" + search)
     setPosts(res.data)
    }
    getPosts();

  },[search])
  
  
  
  
  return (
    <>
     <Header/>
     <div className="home">
       <Posts posts={posts}/>
       <Sidebar/>
       </div>
       </>
  );
}

export default Home;

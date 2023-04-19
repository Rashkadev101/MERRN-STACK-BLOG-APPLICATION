import "./SinglePost.css";
import { Link } from "react-router-dom";
import {FaEdit, FaTrash } from "react-icons/fa";
import { useLocation} from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

const SinglePost = () => {
  const location = useLocation()
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({})
  const PF = "http://localhost:5000/images/";
  const { user} = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc)
    };
    fetchPost()
  
  }, [path])

  const handleDelete = async () => {
    try{
      await axios.delete("http://localhost:5000/api/posts/" + path , {
        data: {username: user.username},
      });
        window.location.replace("/");
      }catch(err){}
    };

    const handleUpdate = async () => {
      try{
        await axios.put("http://localhost:5000/api/posts/" + path , {
          username: user.username, title, desc,
        });
          // 
          setUpdateMode(false)
        }catch(err){}

    };
 
  return (
    <>
    <div className="singlepost">
       <div className="singlepostItem">
       {post.photo && (
        <img src={ PF + post.photo} alt="" className="singlepostImg"/>
       )}{
        updateMode ? <input type="text" value={title} className="singleposttitleInput"
         autoFocus
         onChange={(e)=>setTitle(e.target.value)}/> : (

       
        <h1 className="singleposttitle">
          {title}
          {post.username === user?.username && (
             <div className="singlepostIcon">
             <FaEdit className="singlepostedit" onClick={()=>setUpdateMode(true)}/>
            <FaTrash className="singlepostdelete" onClick={handleDelete}/>
         </div>

          )}
          </h1>
         )

        }
        <div className="singlepostinfo">
            <h3 className="singlepostauthor">
                author: 
                <Link to={`/?user=${post.username}`} className="singlepostuser">
                <b>{post.username}</b>
                </Link>
                
            </h3>
            <span className="singlepostdate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        {/**single Post Auother End */}
        {updateMode ? (
          <textarea className="singlepostdescInput" value={desc} 
          onChange={(e)=>setDesc(e.target.value)}/>

        ) : (
          <p className="singlepostdesc">{desc}</p>

        )}
        {updateMode && (
          <button className="btnSinglePostUpdate" onClick={handleUpdate}>update</button>
          )};
          </div>
           </div>
    </>
  )
}

export default SinglePost

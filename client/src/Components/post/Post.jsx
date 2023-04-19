import "./Post.css";
import { Link } from "react-router-dom";

const Post = ({post}) => {
  const PF = "http://localhost:5000/images/"
  return (
    <>
    <div className="post">
        {post.photo &&(
          <img src={ PF + post.photo} alt="" className="postImg"/>
        )}
        <div className="postInfo">
            <div className="postCats">
               {post.categories.map((c)=>(
                 <h4 className="postCat">{c.name}</h4>
                 

               ))}
               
            </div>
            <Link to={`/post/${post._id}`}>
            <h2 className="postTitle">{post.title}</h2>

            </Link>
            
            <hr/>
            <span className="postdate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDesc">{post.desc}</p>
       
      
    </div>
    </>
  )
}

export default Post

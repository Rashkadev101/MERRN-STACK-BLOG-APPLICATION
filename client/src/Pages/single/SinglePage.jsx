import "./SinglePage.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import SinglePost from "../../Components/singlepost/SinglePost";



const SinglePage = () => {
  return (
    <div>
      <div className="single">
      <SinglePost/>
      <Sidebar/>
    </div>
      
    </div>
  )
}

export default SinglePage;

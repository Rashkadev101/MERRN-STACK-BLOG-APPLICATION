import Topbar from "./Components/topbar/Topbar";
import Home from "./Pages/home/Home";
import Register from "./Pages/register/Register";
import Login from "./Pages/login/Login";
import CreateBlog from "./Pages/createblog/CreateBlog";
import Setting from "./Pages/settings/Setting";
import SinglePage from "./Pages/single/SinglePage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  //create pseduo user 
  const {user} = useContext(Context);
  return (
   
   <Router>
   <Topbar/>
   <div>
    <nav>
      <ul style={{display:"none"}}>
        <li><Link to="/"></Link></li>
        </ul>
    </nav>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/register" element={user ? <Home/> :<Register/>}/>
      <Route path="/login" element={user ? <Home/> :<Login/>}/>
      <Route path="/createblog" element={user ? <CreateBlog/> :<Register/>}/>
      <Route path="/settings" element={user ? <Setting/>: <Register/>}/>
      <Route path="/post/:postId" element={<SinglePage/>}/>
      </Routes>
   </div>
   </Router>
   
  );
}

export default App;

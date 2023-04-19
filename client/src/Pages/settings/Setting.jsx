import "./Setting.css";
import Sidebar from "../../Components/sidebar/Sidebar";
import { FaUser } from "react-icons/fa";
import { Context } from "../../context/Context";
import { useContext, useState } from "react";
import axios from "axios";

const Setting = () => {
    const { user, dispatch} = useContext(Context);
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const PF = "http://localhost:5000/images/"
    //define handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:"UPDATE_START"})
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        };
        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            updatedUser.profilePic = filename;

            try{
                await axios.post("http://localhost:5000/api/upload", data)

            }catch(err) {}
        };
        try {
          const res =  await axios.put("http://localhost:5000/api/users/" + user._id, updatedUser);
            setSuccess(true);
            dispatch({type:"UPDATE_SUCCESS", payload: res.data});
        }catch(err) {
            dispatch({type:"UPDATE_FAILURE"});
        }
    };
    

  return (
    <>
    <div className="setting">
        <div className="settingItem">
            <div className="settingTitle">
                <span className="settingUpdateTitle">update your account</span>
                <span className="settingDeleteTitle">delete your account</span>
            </div>
            <form className="settingForm" onSubmit={handleSubmit}>
                <label>porifile picture</label>
                <div className="settingpp">
                    <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} alt="" className="settingImg"/>
                    <label htmlFor="fileInput">
                        <FaUser className="settingIcon"/>

                    </label>
                    <input type="file" id="fileInput" 
                    style={{display:"none"}}
                    onChange={(e)=>setFile(e.target.files[0])}
                    />
                </div>
                <label>username</label>
                <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)}/>
                <label>email</label>
                <input type="email" placeholder={user.email} onChange={e=> setEmail(e.target.value)} />
                <label>password</label>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
                <button className="btnSetting" type="submit">update</button>
                {success && <p>profile has been updated....</p>}

            </form>
        </div>
        <Sidebar/>
      
    </div>
    </>
  )
}

export default Setting

import "./CreateBlog.css";
import { useContext, useState } from "react";
import {FaPlusCircle} from "react-icons/fa";
import {Context} from "../../context/Context";
import axios from "axios";

const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const {user} = useContext(Context)

    //define handleSubmit
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username:user.username,
            title,
            desc,
        };
        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;

            try{
                await axios.post("http://localhost:5000/api/upload", data)

            }catch(err) {

            }
        }
        try {
           const res = await axios.post("http://localhost:5000/api/posts", newPost);
           window.location.replace("/post/" + res.data._id)

        }catch(err) {}
    };
       
  return (
    <>
    <div className="createBlog">
        {file && (
            <img src={URL.createObjectURL(file)} alt="" className="createImg"/>
        )}
        <form className="createForm" onSubmit={handleSubmit}>
            <div className="createFormGroup">
                <label htmlFor="fileInput">
                    <FaPlusCircle className="createIcon"/>
                    
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}
                onChange={(e) => setFile(e.target.files[0])}
                />
                <input type="text" placeholder="Title" className="createInput" autoFocus={true}
                onChange={e=> setTitle(e.target.value)}
                />
            </div>

            <div className="createFormGroup">
                <textarea placeholder="tell your story..." className="createInput createText"
                onChange={e=> setDesc(e.target.value)}
                />
            </div>
            <button className="btnCreate" type="submit">publish</button>
        </form>
       
      
    </div>
    </>
  )
}

export default CreateBlog

import React,{useState} from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from "axios";


export default function Post() {
const [title,setTitle]=useState("");
const [description,setDescription]=useState("");
const [image,setImage]=useState(null);



function TitleChangeHandler (event){
    let title=event.target.value;
   setTitle(title);

  }
  function detailChangeHandler (event){
    let detail=event.target.value;
    setDescription(detail);

  }
 function onImage(e){
   setImage(e.target.files[0]);

 }

  const onSubmit =(event)=>{
    if(image ===" " || title ===" " || description === "")
    {
      alert("Please fill all required fields")
    }
    else{
    event.preventDefault();
    const formData = new FormData();
    formData.append('image',image);
    formData.append('title',title);
    formData.append('description',description);


    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };

    axios.post('http://localhost:8000/posts/add',formData,config)
    .then(res => {
        alert(res.data.message);
        window.location="/posts"
    })
    .catch(err =>{
      console.log("error" + err);
    })
  }
}

    return (
        <div>
           <form>
        <h1>Create Post</h1>
        <p>Enter your title:</p>
        <input
          type="text"
          required
          className="col-sm-6 col-form-label"
          placeholder="title here"
          name="title"
          onChange={TitleChangeHandler}
        />
        <br />
        <br />
        <p>Enter your description</p>
        <textarea
          type="text"
          required
          className="col-sm-6 col-form-label"
          placeholder="detail must be here"
          name="detail"
          onChange={detailChangeHandler}
        />
        <br />
        <br />
        <input type="file" name="image"  onChange= {onImage} />
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>create post</button>
      </form>
        </div>
    )
}

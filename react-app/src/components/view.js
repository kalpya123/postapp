import React,{useState,useEffect} from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import Updatepost from "./updatepost";
import axios from "axios";
import Popup from 'reactjs-popup';

export default function View(props) {
   const[posts,setPosts]=useState([]);
   let allpost;
    useEffect(() => {

      async function fetchData()
      {
        const res=await axios.get('http://localhost:8000/posts/')
        setPosts(res.data)
      }
      
        fetchData()
      },[]);
    
     function deletedata(_id)
     {
   
      axios.delete(`http://localhost:8000/posts/delete/${_id}`)
      .then(res =>{
      alert(res.data.message)
        window.location="/posts"
      })
      .catch(err =>{
        console.log(err);
      })
     }

     console.log(posts.length)
    if(posts.length < 1)
    {
  allpost=<h5 className='text-danger'>No post available </h5>
    }
    else
    {
     allpost = posts.map((post)=>(
        <div key={post._id} className="container">
  <div className="row" style={{margin:"10px"}}>
    <div className="col-sm-6">
      <div className="card">
        <div className="card-body">
        <img className="card-img-top" src={"http://localhost:8000/"+post.Image} alt="Card image cap" />
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.description}</p>
          <button className="btn btn-danger" onClick={() => deletedata(post._id)}>delete </button>
        </div>
      </div>
    </div>  
     
    </div>
  
  
     
  
  </div>
      
      ))
    }
     return (
   
      <div>
   <br />
    <Link to="/post"><button className="btn btn-success">Create post</button></Link>
    <br/>
         <h1> All posts are here</h1>
         <br />
          <p>
          {allpost}     
   </p>
        </div>
    )
}

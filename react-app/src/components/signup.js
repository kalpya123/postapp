import React,{useState} from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from "axios";


export default function Signup() {
const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
function UsernameChangeHandler (event){
    let username=event.target.value;
   setUsername(username);

  }
  function passwordChangeHandler (event){
    let pass=event.target.value;
    setPassword(pass);

  }


  const onSubmit =(event)=>{
    event.preventDefault();
    if(username === "" || password === "")
    {
      alert("Please fill all required fields")
    }
    else{
   
    const signup ={
        username:username,
        password:password
    }
    axios.post('http://localhost:8000/user/signup',signup)
    .then(res => {
        console.log(res);
        alert(res.data.message);
        window.location="/";
    })
    .catch(err =>{
      console.log("error" + err);
    })
  }
}
  
    return (
        <div>
           <form>
        <h1>SignUp Here</h1>
        <p>Enter your username:</p>
        <input
          type="text"
          required
          className="col-sm-6 col-form-label"
          placeholder="username must be here"
          name="username"
          onChange={UsernameChangeHandler}
        />
        <br />
        <br />
        <p>Enter your password:</p>
        <input
          type="password"
          required
          className="col-sm-6 col-form-label"
          placeholder="password must be here"
          name="password"
          onChange={passwordChangeHandler}
        />
        <br />
        <br />
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>SignUp</button>
      </form>
       <p>
         <br />
           Already registered ?
          <br />
           <Link to="/" className="link-info">login</Link>
  

       </p>
        </div>
    )
}

import React,{useState} from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from "axios";



export default function Login() {
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
  console.log(username,password)
  if(username==="" || password ==="")
  {
    alert("Please fill all required fields")
  }
  else{
    event.preventDefault();
    const Login ={
        username:username,
        password:password
    }
    axios.post('http://localhost:8000/user/login',Login)
    .then(res => {
       
      if(res.status === 200)
      {
        alert(res.data.message);
     window.location="/posts"
      }
      else{
          alert("Invalid credentials")
      }
       
        
    })
    .catch(err =>{
      console.log("error" + err);
    })
  }
}
    return (
        <div>
           <form className="form-group">
        <h1>Login here</h1>
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
          type="passsword"
          required
          className="col-sm-6 col-form-label"
          placeholder="password must be here"
          name="password"
          onChange={passwordChangeHandler}
        />
        <br />
        <br />
        <button type="submit" onClick={onSubmit} className="btn btn-primary">Login</button>
      </form>
       <p>
         <br/>
           New User ?
              <br/>  <Link to="/signup" className="link-info">SignUp</Link>
  

       </p>
        </div>
    )
}

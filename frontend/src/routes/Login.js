import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
  const [cred, setCred] = useState({email: "" , password: ""});
  let navigate = useNavigate();
  const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/api/loginuser", {
            method : 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({email: cred.email, password: cred.password})
        });
        const json = await response.json();
        console.log(json);
        if(!json.success){
            alert("Enter valid credentials");
        }
        else{
            localStorage.setItem("userEmail", cred.email);
            localStorage.setItem("authToken", json.authToken);
            console.log(localStorage.getItem("authToken"));
            navigate("/");
        }
  }

  const onChange = (e) =>{
        setCred({...cred, [e.target.name]: e.target.value})

  }
  return (
    <><div className="container">
    <h2 className="text-center mb-4" style={{ color: 'green', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Login to FoodOnWheels</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="Email" className="form-label">
          Email address
        </label>
        <input type="email" className="form-control" name="email" value={cred.email}  onChange={onChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          name="password" 
          value={cred.password}
          onChange={onChange}
        />
      </div>
      <button type="submit" className="m-3 btn btn-success">
        Submit
      </button>
      <Link to="/createuser" className="m-3 btn btn-danger">I'm a new user</Link>
    </form>
  </div></>
  )
}

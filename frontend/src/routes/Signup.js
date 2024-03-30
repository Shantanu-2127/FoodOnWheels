import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const initialCredState = {name: "" , email: "" , password: "", location : ""};
  const [cred, setCred] = useState(initialCredState);
  const [confirmPassword, setConfirmPassword] = useState('');
  let navigate = useNavigate();
  const handleSubmit = async(e) => {
        e.preventDefault();
        if (cred.password !== confirmPassword) {
          alert('Passwords do not match');
          return;
        }
        const response = await fetch("http://localhost:4000/api/createuser", {
            method : 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({name: cred.name,email: cred.email, password: cred.password, location: cred.location})
        });
        const json = await response.json();
        console.log(json);
        if(!json.success){
            alert("Enter valid credentials");
        }
        else{
          alert("Registration Succesfull");
          navigate("/login");
        }
  
  }

  const onChange = (e) =>{
        setCred({...cred, [e.target.name]: e.target.value})

  }
  return (
    <div>
      <div className="container">
      <h2 className="text-center mb-4" style={{ color: 'Blue', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>Registeration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" name="name" value={cred.name} onChange={onChange}/>
          </div>
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

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password" 
              value={confirmPassword}
              onChange={(e) => { setConfirmPassword(e.target.value)}}
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="Address" className="form-label">
              Address
            </label>
            <input type="text" className="form-control" name="location" value={cred.location} onChange={onChange}/>
          </div>
          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">Already a user</Link>
        </form>
      </div>
    </div>
  );
}

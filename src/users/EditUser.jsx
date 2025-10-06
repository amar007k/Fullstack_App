import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    const navigate = useNavigate();
    const{id} = useParams();
    const[user,setUser] = useState({
        name:"",
        username:"",
        email:"",
        mobile:"",
        password:""
    });
    useEffect(()=>{
        loadUser();
    },[]);
    const{name,username,email,mobile,password} = user;

    const handleChange = (e)=>{
        const{name,value} = e.target;
        setUser({...user,[name]:value})
    };
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await axios.put(`https://fullstackbackend-production-053e.up.railway.app/user/${id}`,user)
        .then(()=>{
            alert("Form Data has been Successfully Updated!..");
            navigate("/")
        })
        .catch((err)=>console.log(err))
    };
    const loadUser = async()=>{
    const result = await axios.get(`https://fullstackbackend-production-053e.up.railway.app/user/${id}`);
    setUser(result.data);
    }
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="text-center">Edit User Deatils</h2>
          <div className="col-md-6 offset-md-3 border p-2 mt-3 rounded shadow">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter Your Name"
                  required
                  value={name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Enter Your Username"
                  required
                   value={username}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  required
                   value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile
                </label>
                <input
                  type="text"
                  name="mobile"
                  className="form-control"
                  placeholder="Enter Your Mobile"
                  required
                   value={mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter Your Password"
                  required
                   value={password}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 d-flex justify-content-center align-center">
                <button className="btn btn-outline-success mx-2">Submit</button>
                <Link to={"/"} className="btn btn-outline-danger mx-2">
                  Back
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditUser

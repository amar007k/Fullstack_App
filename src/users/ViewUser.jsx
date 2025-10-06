import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const ViewUser = () => {
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
   
    const loadUser = async()=>{
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
    }
  return (
    <>
      <div className="container">
        <div className="row">
            <h2 className='text-center'>View User Deatils</h2>
            <div className="col-md-6 offset-md-3 border p-3 mt-3 rounded shadow">
                <div className="card">
                    <div className="card-header">
                        <b>User Details: </b>
                        {user.id}
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                            <b>Name: </b>
                            {user.name}
                            </li>
                            <li className='list-group-item'>
                            <b>Username: </b>
                            {user.name}
                            </li>
                            <li className='list-group-item'>
                            <b>Email: </b>
                            {user.email}
                            </li>
                            <li className='list-group-item'>
                            <b>Mobile: </b>
                            {user.mobile}
                            </li>
                            <li className='list-group-item'>
                            <b>Password: </b>
                            {user.password}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='mb-3 d-flex justify-content-center align-center'>
                <Link to={"/"} className='btn btn-outline-primary my-3'>Back To Home</Link>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ViewUser

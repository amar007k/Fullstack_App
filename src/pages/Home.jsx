import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async(id)=>{
    await axios.delete(`http://localhost:8080/user/${id}`)
    loadUser();
  }
  return (
    <>
      <div className="container">
        <div className="py-5">
          <table className="table table-striped shadow">
            <thead>
              <tr>
                <th scope="col">SR NO</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Password</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
            {users.map((user,index)=>(
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                   <td>{user.mobile}</td>
                    <td>{user.password}</td>
                    <td>
                        <Link to={`/viewuser/${user.id}`} className="btn btn-outline-primary mx-3">View</Link>
                        <Link to={`/edituser/${user.id}`} className="btn btn-outline-info mx-3">Edit</Link>
                        <button className="btn btn-outline-danger mx-3" onClick={()=>deleteUser(user.id)}>Delete</button>
                    </td>
                </tr>
             
            ))}
                
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;

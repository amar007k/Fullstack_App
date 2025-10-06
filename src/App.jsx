import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateUser from "./users/CreateUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/adduser" element={<CreateUser />}></Route>
          <Route path="/edituser/:id" element={<EditUser />}></Route>
          <Route path="/viewuser/:id" element={<ViewUser />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

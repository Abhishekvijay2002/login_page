import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Signuppage() {
  // const [values, setValues] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  // const [message, setMessage] = useState(""); // For success or error messages

  // const handleChange = (e) => {
  //   setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:5000/register", values);
  //     setMessage(response.data.message); // Show success message
  //     console.log("User registered:", response.data);
  //   } catch (error) {
  //     setMessage(error.response?.data?.error || "Something went wrong");
  //     console.error("Registration error:", error);
  //   }
  // };

  return (
    <div style={{ backgroundColor: "#007bff", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="d-flex justify-content-center align-items-center" style={{ width: "400px", height: "auto", backgroundColor: "white", borderRadius: "10px", padding: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <Form onSubmit={handleSubmit}>
          <h4 className="text-center mb-4">Signup Page</h4>
          {message && <p className="text-center" style={{ color: message.includes("success") ? "green" : "red" }}>{message}</p>}
          
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter your name" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} />
          </Form.Group>

          <Button variant="primary" className="w-100" type="submit">
            Signup
          </Button>

          <div className="text-center mt-3">
            <p>Already have an account? <a href="login">Log in</a></p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Signuppage;



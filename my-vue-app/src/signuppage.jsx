import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, Link } from 'react-router-dom';

function Signuppage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", { name, email, password }, { headers: { "Content-Type": "application/json" } })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ backgroundColor: "#007bff", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="d-flex justify-content-center align-items-center" style={{ width: "400px", backgroundColor: "white", borderRadius: "10px", padding: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <Form onSubmit={handleSubmit}>
          <h4 className="text-center mb-4">Signup Page</h4>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </Form.Group>
          <Button variant="primary" className="w-100" type="submit">Signup</Button>
          <div className="text-center mt-3">
            <p>Already have an account? <Link to="/login">Log in</Link></p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Signuppage;



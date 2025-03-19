import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Loginpage() {
const handlechange = (e) => {
    console.log(e.target.value)
}

  return (
    <div style={{ backgroundColor: "#007bff", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <div className="d-flex justify-content-center align-items-center" style={{ width: "400px", height: "auto", backgroundColor: "white", borderRadius: "10px", padding: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <Form>
        <h4 className="text-center mb-4">Login Page</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={handlechange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handlechange} />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Login
        </Button>
        <div className="text-center mt-3">
          <p>Don't have an account? <a href="signup">Sign Up</a></p>
        </div>
      </Form>
    </div>
  </div>
  )
}

export default Loginpage

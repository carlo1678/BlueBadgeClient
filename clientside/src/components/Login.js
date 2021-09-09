import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");

  const userEmailInput = (event) => {
    setUserEmail(event.target.value);
  };

  const userPassInput = (event) => {
    setUserPass(event.target.value);
  };

  let userData = {
    user: {
      email: userEmail,
      password: userPass,
    },
  };

  const userLogin = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
        // let token = data.sessionToken;
        // localStorage.setItem("SessionToken", token);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className='loginAll' id='loginAll'>
      <h1 class="websiteTitle">Welcome Back</h1>
      <h1 className='loginHere'>Login Here!</h1>
      <Form onSubmit={userLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={userEmail}
            onChange={userEmailInput}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={userPass}
            onChange={userPassInput}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className='loginButton'>
          Submit
        </Button>
      </Form>
    </div>
  );
}

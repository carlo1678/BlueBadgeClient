import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const history = useHistory();

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
        let token = data.sessionToken;
        localStorage.setItem("SessionToken", token);
        toast.success("Succesfully Registered!", {
          position: toast.POSITION.TOP_CENTER,
        });
        history.push("/home");
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <div>
      <h1>Login Here!</h1>
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
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p>Need to register?</p>
        <Link to={"/Signup"}>
          <Button variant="primary">Click Here!</Button>
        </Link>
      </Form>
    </div>
  );
}

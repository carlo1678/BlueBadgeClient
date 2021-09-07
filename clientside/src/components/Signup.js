import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

export default function Signup() {
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const history = useHistory();

  const changeUserEmail = (event) => {
    setUserEmail(event.target.value);
  };

  const changeUserPass = (event) => {
    setUserPass(event.target.value);
  };

  const newUserData = {
    user: { email: userEmail, password: userPass },
  };

  const userSignUp = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Succesfully Registered!", {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log(data);
        let token = data.sessionToken;
        localStorage.setItem("SessionToken", token);
        history.push("/");
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
      <h1>Register for an account here!</h1>
      <Form onSubmit={userSignUp}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={userEmail}
            onChange={changeUserEmail}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={userPass}
            onChange={changeUserPass}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <p>Already have an account?</p>
        <Link to={"/"}>
          <Button variant="primary">Click Here!</Button>
        </Link>
      </Form>
    </div>
  );
}

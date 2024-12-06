import React, { useEffect, useState } from "react";
import "./login.css";
import { Button, Modal } from "react-bootstrap";

const authenticateUser = (username, password) => {
  return username === "user@gmail.com" && password === "password";
};

const LoginModal = ({ show, handleClose, handleSignupShow }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Check localStorage to see if the user is logged in
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogin = () => {
    if (authenticateUser(username, password)) {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn(true);
      handleClose();
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <form>
          <h1 className="h3 mb-3 fw-normal">Please Sign in</h1>

          <div className="form-floating my-2">
            <input
              type="email"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="floatingInput"
              placeholder="Enter email address"
            />
            <label>Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="floatingPassword"
            />
            <label>Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label">Remember me</label>
          </div>
          <button
            className="btn btn-primary primary-bg w-100 py-2 b-0"
            type="submit"
            onClick={handleLogin}
          >
            Sign in
          </button>
          <p className="mt-5 mb-3 text-body-secondary">
            have you forget password?{" "}
            <span onClick={handleSignupShow}>Sign up now</span>
          </p>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;

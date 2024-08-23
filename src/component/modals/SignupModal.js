import React from "react";
import { Modal } from "react-bootstrap";

const SignupModal = ({ signupShow, handleSignupClose }) => {
  return (
    <Modal
      show={signupShow}
      onHide={handleSignupClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <form>
          <h1 className="h3 mb-3 fw-normal">Please Sign up</h1>

          <div className="form-floating my-4">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label>Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label>Password</label>
          </div>
          <div className="form-floating  my-4">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="re-type Password"
            />
            <label>Password re-type</label>
          </div>

          <button
            className="btn btn-primary primary-bg w-100 py-2"
            type="submit"
          >
            Sign up
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default SignupModal;

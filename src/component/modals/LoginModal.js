import React from "react";
import "./login.css";

const LoginModal = () => {
  return (
    <div
      classNameName="modal fade"
      id="LoginModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div classNameName="modal-dialog">
        <div classNameName="modal-content p-5">
          <button
            type="button"
            className="btn-close btn-cross "
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <form>
            <h1 className="h3 mb-3 fw-normal">Please Sign in</h1>

            <div className="form-floating my-2">
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
              className="btn btn-primary primary-bg w-100 py-2"
              type="submit"
            >
              Sign in
            </button>
            <p className="mt-5 mb-3 text-body-secondary">
              have you forget password?{" "}
              <span data-bs-toggle="modal" data-bs-target="#signupModal">
                Sign up now
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

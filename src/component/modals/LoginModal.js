import React from "react";
import "./login.css";

const LoginModal = () => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content p-5">
          <button
            type="button"
            class="btn-close btn-cross "
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
          <form>
            <h1 class="h3 mb-3 fw-normal">Please Sign in</h1>

            <div class="form-floating my-2">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div class="form-check text-start my-3">
              <input
                class="form-check-input"
                type="checkbox"
                value="remember-me"
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Remember me
              </label>
            </div>
            <button class="btn btn-primary primary-bg w-100 py-2" type="submit">
              Sign in
            </button>
            <p class="mt-5 mb-3 text-body-secondary">
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

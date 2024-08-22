import React from "react";

const SignupModal = () => {
  return (
    <div
      className="modal fade"
      id="signupModal"
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
            <h1 class="h3 mb-3 fw-normal">Please Sign up</h1>

            <div class="form-floating my-4">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label>Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label>Password</label>
            </div>
            <div class="form-floating  my-4">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="re-type Password"
              />
              <label>Password re-type</label>
            </div>

            <button class="btn btn-primary primary-bg w-100 py-2" type="submit">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;

import { Link, Route, Routes } from "react-router-dom";
import "./assets/css/common.css";
import LoginModal from "./component/modals/LoginModal";
import SignupModal from "./component/modals/SignupModal";
import Home from "./component/pages/home/Home";
import BusListingPage from "./component/pages/buslisting/BusListingPage";
import { useEffect, useState } from "react";
import PaymentDetailsPage from "./component/pages/paymentdetails/PaymentDetailsPage";
import Fail from "./component/pages/fail/Fail";
import Success from "./component/pages/success/Success";
function App() {
  const [show, setShow] = useState(false);
  const [signupShow, setSignupShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSignupShow = () => setSignupShow(true);
  const handleSignupClose = () => setSignupShow(false);

  let isLogin = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    isLogin = localStorage.removeItem("isLoggedIn");
  };
  return (
    <div className="App">
      <header className="p-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0  text-decoration-none"
            ></Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2">
                  <img
                    src="/img/rdc-redbus-logo.webp"
                    alt="rdc-redbus-logo"
                    width={60}
                  />
                </Link>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-body-emphasis">
                  BUS TICKETS
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-body-emphasis">
                  rYde
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 link-body-emphasis">
                  redrail
                </a>
              </li>
            </ul>

            <div>
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none px-2 "
              >
                Help
              </a>
            </div>
            <div className="dropdown text-end px-4">
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Manage Booking
              </a>
            </div>

            <div className="dropdown text-end">
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu text-small">
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  {isLogin ? (
                    <a
                      className="dropdown-item "
                      href="#"
                      onClick={handleLogout}
                    >
                      Logout
                    </a>
                  ) : (
                    <a className="dropdown-item " href="#" onClick={handleShow}>
                      Login / Signup
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bus-listing" element={<BusListingPage />} />
        <Route path="/payment-details" element={<PaymentDetailsPage />} />
        <Route path="/fail" element={<Fail />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      {/* <Home /> */}
      {show && (
        <LoginModal
          show={show}
          handleClose={handleClose}
          handleSignupShow={handleSignupShow}
        />
      )}
      {signupShow && (
        <SignupModal
          signupShow={signupShow}
          handleSignupClose={handleSignupClose}
        />
      )}
    </div>
  );
}

export default App;

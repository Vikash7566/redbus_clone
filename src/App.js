import "./assets/css/common.css";
import LoginModal from "./component/modals/LoginModal";
import SignupModal from "./component/modals/SignupModal";
import Home from "./component/pages/home/Home";
function App() {
  return (
    <div className="App">
      <header className="p-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0  text-decoration-none"
            ></a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2">
                  <img
                    src="/img/rdc-redbus-logo.webp"
                    alt="rdc-redbus-logo"
                    width={60}
                  />
                </a>
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
                  <a
                    className="dropdown-item "
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    href="#"
                  >
                    Login / Signup
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <Home />
      <LoginModal />
      <SignupModal />
    </div>
  );
}

export default App;

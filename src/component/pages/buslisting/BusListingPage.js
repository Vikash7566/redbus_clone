import React, { useState } from "react";
import data from "../../../assets/data.js";
import "./buslisting.css";
import { Link } from "react-router-dom";

const BusListingPage = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isFemale, setIsFemale] = useState(false);

  const handleSeatClick = (seat) => {
    if (seat.isBooked) return; // Prevent selection of booked seats
    if (seat.isFemaleOnly && !isFemale) {
      alert("This seat is female-only.");
      return;
    }

    setSelectedSeats((prevSeats) =>
      prevSeats.includes(seat.number)
        ? prevSeats.filter((s) => s !== seat.number)
        : [...prevSeats, seat.number]
    );
  };
  console.log("selectedSeats", selectedSeats);
  const handleGenderToggle = () => {
    setIsFemale(!isFemale);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          {/* <div>
            <h6 className="mt-3">Live Tracking(15)</h6>
          </div>
          <div>
            <h6>Departure Time</h6>
            <p>Before 6am</p>
            <p>6am to 12pm</p>
            <p>12pm to 6pm</p>
            <p>after 6pm</p>
          </div> */}
          <div className="flex-shrink-0 p-3" style={{ width: "280px;" }}>
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom"
            >
              <span className="fs-5 fw-semibold">Live Tracking(15)</span>
            </a>
            <ul className="list-unstyled ps-0">
              <li className="mb-1">
                <button
                  className="btn btn-toggle d-inline-flex align-items-center rounded border-0"
                  data-bs-toggle="collapse"
                  data-bs-target="#home-collapse"
                  aria-expanded="true"
                >
                  Departure Time
                </button>
                <div className="collapse show" id="home-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        Departure Time
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        Before 6am
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        6am to 12pm
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        12pm to 6pm
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        after 6pm
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-1">
                <button
                  className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#dashboard-collapse"
                  aria-expanded="false"
                >
                  Bus Type
                </button>
                <div className="collapse" id="dashboard-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        Seater
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        Sleeper
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        AC
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mb-1">
                <button
                  className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#orders-collapse"
                  aria-expanded="false"
                >
                  Seat Availablity
                </button>
                <div className="collapse" id="orders-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        Single Seat(9)
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="border-top my-3"></li>
              <li className="mb-1">
                <button
                  className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#account-collapse"
                  aria-expanded="false"
                >
                  Arrival time
                </button>
                <div className="collapse show" id="home-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        Departure Time
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        Before 6am
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        6am to 12pm
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        12pm to 6pm
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                      >
                        after 6pm
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-sm-3 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-body text-center">
                  <h6 className="card-title">
                    Save upto Rs.200 in Delhi & North india{" "}
                  </h6>
                  {/* <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p> */}
                  <img
                    className="my-2"
                    src="/img/200save.png"
                    alt="200off-img"
                    width={100}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">Special title treatment</h5>

                  <img
                    className="my-2"
                    src="/img/200save.png"
                    alt="200off-img"
                    width={100}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">Special title treatment</h5>

                  <img
                    className="my-2"
                    src="/img/200save.png"
                    alt="200off-img"
                    width={100}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">Special title treatment</h5>

                  <img
                    className="my-2"
                    src="/img/200save.png"
                    alt="200off-img"
                    width={100}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Sort By:</th>
                  <th scope="col">Departure</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Arrival</th>
                  <th scope="col">Ratings</th>
                  <th scope="col">Fare</th>
                  <th scope="col">Seat Available</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    VRL Travels
                    <br />
                    <small>Volvo Multi-Axle I-Shift A/C Sleeper</small>
                  </td>
                  <td>
                    10:30 <br /> <small>Mumbai</small>{" "}
                  </td>
                  <td>
                    7:30 <br />-
                  </td>
                  <td>
                    14:33 <br />
                    <small>Delhi</small>
                  </td>
                  <td>3.5/5</td>
                  <td>Start From INR 300</td>
                  <td>
                    86 Seats Available
                    <button
                      className="primary-bg color-fff fs-12 b-0 p-8 mt-4"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      View Seats
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
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
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="row">
                      <p>
                        Click on an available seat to proceed with your
                        transaction
                      </p>
                      <div className="col-md-12">
                        {" "}
                        <p>Upper Deck</p>
                        {data.map((seat) => {
                          return (
                            <>
                              {seat.id <= 48 && (
                                <button
                                  key={seat.id}
                                  className={`seat text-center
                            ${seat.isBooked ? "booked" : ""}
                            ${seat.isFemaleOnly ? "female-only" : ""}
                             ${
                               selectedSeats.includes(seat.number)
                                 ? "selected"
                                 : ""
                             }`}
                                  onClick={() => handleSeatClick(seat)}
                                  disabled={seat.isBooked}
                                >
                                  {seat.id}
                                </button>
                              )}
                            </>
                          );
                        })}
                        <p>Lower Deck</p>
                        {data.map((seat) => {
                          return (
                            <>
                              {seat.id > 48 && (
                                <button
                                  key={seat.id}
                                  className={`seat text-center
                          ${seat.isBooked ? "booked" : ""}
                          ${seat.isFemaleOnly ? "female-only" : ""}
                           ${
                             selectedSeats.includes(seat.number)
                               ? "selected"
                               : ""
                           }`}
                                  onClick={() => handleSeatClick(seat)}
                                  disabled={seat.isBooked}
                                >
                                  {seat.id}
                                </button>
                              )}
                            </>
                          );
                        })}
                      </div>
                      {/* <div className="col-md-4">s
                        <p className="primary-bg color-fff">Seat Legend</p>
                      </div> */}
                      <button
                        className="primary-bg b-0"
                        style={{ borderRadius: "10px" }}
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <Link
                          className="text-decoration-none color-fff"
                          to="/payment-details"
                          state={{ selectedSeats }}
                        >
                          Proceed to Pay
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {<TicketBooking />} */}
    </div>
  );
};

export default BusListingPage;

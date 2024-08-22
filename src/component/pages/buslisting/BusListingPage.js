import React, { useState } from "react";
import data from "../../../assets/data.js";
import "./buslisting.css";

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

  const handleGenderToggle = () => {
    setIsFemale(!isFemale);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">sidebar</div>
        <div className="col-md-8">
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
            <table class="table">
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
                  <td>Start From INR 312</td>
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
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div className="row">
                      <p>
                        Click on an available seat to proceed with your
                        transaction
                      </p>
                      <div className="col-md-8">
                        {" "}
                        <p>Upper Deck</p>
                        {data.map((seat) => {
                          return (
                            <>
                              {seat.id <= 48 && (
                                <button
                                  key={seat.id}
                                  className={`seat
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
                                  className={`seat
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
                      <div className="col-md-4"></div>
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

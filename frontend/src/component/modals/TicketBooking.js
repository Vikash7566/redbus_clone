import React from "react";
import data from "../../assets/data.js";

const TicketBooking = () => {
  return (
    <div
      classNameName="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div classNameName="modal-dialog">
        <div classNameName="modal-content p-5">
          <div className="row">
            <p>Click on an available seat to proceed with your transaction</p>
            <div className="col-md-6">
              {data.map((item) => {
                return (
                  <>
                    <p>{item.id}</p>
                  </>
                );
              })}
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketBooking;

import React from "react";
import { useLocation } from "react-router-dom";

const PayentDetails = () => {
  const location = useLocation();
  const seats = location?.state?.selectedSeats;
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <small>Departure</small> <br />
              10:30
            </td>
            <td>
              <small>Seats</small> <br />
              {seats?.join(",")}
            </td>
          </tr>
          <tr>
            <td>Amount</td>
            <td>INR {seats?.length * 300}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PayentDetails;

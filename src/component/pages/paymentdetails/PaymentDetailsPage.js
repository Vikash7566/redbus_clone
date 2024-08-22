import React from "react";
import { useLocation } from "react-router-dom";

const PaymentDetailsPage = () => {
  const location = useLocation();
  const seats = location.state.selectedSeats;
  return (
    <div>
      <h1>Seat : {seats.join(",")}</h1>
      <h1>Amount :{seats.length * 500} </h1>
      <button>Fail</button>
      <button>Success </button>
    </div>
  );
};

export default PaymentDetailsPage;

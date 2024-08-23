import React from "react";
import PayentDetails from "../../common/PayentDetails";
import { Link } from "react-router-dom";

const PaymentDetailsPage = () => {
  return (
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Intercity Travel Mumbai</h1>
          <PayentDetails />
          <p>
            <Link to="/fail" className="btn btn-secondary mx-2 my-2">
              Fail
            </Link>
            <Link to="/success" className="btn btn-primary my-2 mx-2">
              Success
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentDetailsPage;

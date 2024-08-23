import React from "react";
import { Link } from "react-router-dom";
import PayentDetails from "../../common/PayentDetails";

const Success = () => {
  return (
    <section className="wrapper bg-light">
      <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-9 col-xl-8 mx-autod-flex d-flex justify-content-center ">
            <img src="img/Payment-success.png" alt="" width={500} />
          </div>

          <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
            <h3 className="mb-3"></h3>
            <PayentDetails />

            <button type="button" className="btn btn-primary color-fff">
              {" "}
              <Link className="color-fff text-decoration-none" to={"/"}>
                back to Home
              </Link>{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;

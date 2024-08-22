import React from "react";

const HomeBanner = () => {
  return (
    <section
      className="home-banner wrapper image-wrapper bg-cover bg-image bg-overlay bg-overlay-500"
      style={{
        backgroundImage: "url(/img/Homepage-header-1600.webp)",
        backgroundRepeat: "no-repeat",
        minHeight: "102vh",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "12rem",
          background: "#fff",
          borderRadius: "20px",
          maxWidth: "56rem",
        }}
      >
        <div className="row">
          <div className="col-md-3">
            <div class="input-group mb-3">
              <button class="btn " type="button" id="button-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bus-front-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 7a1 1 0 0 1-1 1v3.5c0 .818-.393 1.544-1 2v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V14H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a2.5 2.5 0 0 1-1-2V8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1V2.64C1 1.452 1.845.408 3.064.268A44 44 0 0 1 8 0c2.1 0 3.792.136 4.936.268C14.155.408 15 1.452 15 2.64V4a1 1 0 0 1 1 1zM3.552 3.22A43 43 0 0 1 8 3c1.837 0 3.353.107 4.448.22a.5.5 0 0 0 .104-.994A44 44 0 0 0 8 2c-1.876 0-3.426.109-4.552.226a.5.5 0 1 0 .104.994M8 4c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9s3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44 44 0 0 0 8 4m-3 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0m8 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-7 0a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1" />
                </svg>
              </button>
              <input
                type="text"
                class="form-control"
                placeholder="from"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div class="input-group mb-3">
              <button class="btn " type="button" id="button-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bus-front-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 7a1 1 0 0 1-1 1v3.5c0 .818-.393 1.544-1 2v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V14H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a2.5 2.5 0 0 1-1-2V8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1V2.64C1 1.452 1.845.408 3.064.268A44 44 0 0 1 8 0c2.1 0 3.792.136 4.936.268C14.155.408 15 1.452 15 2.64V4a1 1 0 0 1 1 1zM3.552 3.22A43 43 0 0 1 8 3c1.837 0 3.353.107 4.448.22a.5.5 0 0 0 .104-.994A44 44 0 0 0 8 2c-1.876 0-3.426.109-4.552.226a.5.5 0 1 0 .104.994M8 4c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9s3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44 44 0 0 0 8 4m-3 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0m8 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m-7 0a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1" />
                </svg>
              </button>
              <input
                type="text"
                class="form-control"
                placeholder="to"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div class="input-group mb-3">
              <button class="btn " type="button" id="button-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-calendar"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                </svg>
              </button>
              <input
                type="date"
                class="form-control"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
            </div>
          </div>
          <div className="col-md-3 text-center">
            {" "}
            <button class="btn " type="button" id="button-addon1 ">
              Search Buses
            </button>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col-sm-4 mb-3 mb-sm-0">
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
          <div className="col-sm-4">
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
          <div className="col-sm-4">
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
      </div>
    </section>
  );
};

export default HomeBanner;

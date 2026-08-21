import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row">
        <div className="text-center" style={{ marginTop: "8%" }}>
          <h2>Open a free demat and trading account online</h2>
          <h5 className="text-muted mt-3">
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </h5>
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-5 mt-5" style={{ textAlign: "Right"}}>
          <img src="media/images/account_open.svg" style={{ width: "110%" }} />
        </div>
        <div className="col-6  p-5" style={{ marginTop: "5%"}}>
          <h3>Signup now</h3>
          <p className="text-muted">Or track your existing application</p>
          <input
            className="phone-input"
            placeholder="Enter your phone number"
            style={{
              width: "50%",
              height: "3.0rem",
              padding: "0.5rem 0.75rem",
              textAlign: "center",
              fontSize: "1.25rem",
              boxSizing: "border-box",
            }}
          />{" "}
          <br />
          <button
            className="p-2 btn btn-primary fs-5 mt-3"
            style={{ width: "30%", margin: "0 auto" }}
          >
            Get Otp
          </button>
          <p className="text-muted mt-4">
            By proceeding, you agree to the Zerodha{" "}
            <a href="" style={{ textDecoration: "none" }}>
              terms{" "}
            </a>{" "}
            &{" "}
            <a href="" style={{ textDecoration: "none" }}>
              privacy policy
            </a>{" "}
          </p>
          <div className="border-bottom"></div>
          <p className="text-muted mt-2 ">
            Looking to open NRI account?{" "}
            <a href="" style={{ textDecoration: "none" }}>
              click here{" "}
            </a>
          </p>
        </div>
        <div className="text-center text-muted" style={{ marginTop: "8%" }}>
          <h2>Already have a demat account?</h2>
          <h5 className="text-muted mt-3">
            Move your holdings to Zerodha and we'll cover your transfer costs,
            up to ₹500,{" "}
            <a href="" style={{ textDecoration: "none" }}>
              learn more.
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Hero;

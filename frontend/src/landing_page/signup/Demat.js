import React from "react";

function Demat() {
  return (
    <div className="container">
      <div className="row">
        <h3
          className="text-center text-muted"
          style={{ marginTop: "8%", marginBottom: "2%" }}
        >
          Investment options with Zerodha demat account
        </h3>
        <div className="col-2"></div>
        <div className="col-1 mt-5">
          <img src="media/images/stocks-acop.svg" style={{ width: "150%" }} />
        </div>
        <div className="col-3 mt-5 mx-5 " style={{ fontSize: "1.2rem" }}>
          <h4>Stocks</h4>
          <p className="text-muted">Invest in all exchange-listed securities</p>
        </div>
        <div className="col-1 mt-5">
          <img src="media/images/mf-acop.svg" style={{ width: "150%" }} />
        </div>
        <div className="col-3 mt-5 mx-5" style={{ fontSize: "1.1rem" }}>
          <h4>Mutual funds</h4>
          <p className="text-muted">
            Invest in commission-free direct mutual funds
          </p>
        </div>
        <div className="col-2"></div>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-1 mt-5">
          <img src="media/images/ipo-acop.svg" style={{ width: "150%" }} />
        </div>
        <div className="col-3 mt-5 mx-5" style={{ fontSize: "1.1rem" }}>
          <h4>IPO</h4>
          <p className="text-muted">
            Apply to the latest IPOs instantly via UPI
          </p>
        </div>
        <div className="col-1 mt-5">
          <img src="media/images/stocks-acop.svg" style={{ width: "150%" }} />
        </div>
        <div className="col-3 mt-5 mx-5" style={{ fontSize: "1.1rem" }}>
          <h4>Futures & options</h4>
          <p className="text-muted">
            Hedge and mitigate market risk through simplified F&O trading
          </p>
        </div>
        <div className="col-2"></div>
        <div>
          <div className="col-12 text-center" style={{ marginTop: "6%" }}>
            <button
              className="p-2 btn btn-primary fs-5 mb-5"
              style={{ width: "20%" }}
            >
              Explore Investment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demat;

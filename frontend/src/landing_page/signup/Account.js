import React from "react";

function Account() {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-1"></div>
        <div className="col-6 p-4">
          <img
            src="media/images/acop-benefits.svg"
            className="mx-5 mb-2"
            style={{ width: "70%", marginTop: "10%" }}
          />
          <h3 className="fs-3">Benefits of opening a Zerodha demat account</h3>
        </div>
        <div className="col-5 mt-5">
          <h4>Unbeatable pricing</h4>
          <p className="text-muted mt-2 mb-5">
            Zero charges for equity & mutual fund investments. Flat ₹20 fees for
            intraday and F&O trades.
          </p>
          <h4>Best investing experience</h4>
          <p className="text-muted mt-2 mb-5">
            Simple and intuitive trading platform with an easy-to-understand
            user interface.
          </p>
          <h4>No spam or gimmicks</h4>
          <p className="text-muted mt-2 mb-5">
            Committed to transparency — no gimmicks, spam, "gamification", or
            intrusive push notifications.
          </p>
          <h4>The Zerodha universe</h4>
          <p className="text-muted mt-2 mb-5">
            More than just an app — gain free access to the entire ecosystem of
            our partner products.
          </p>
        </div>
        <div className="col-12 mt-4">
          <h3 className="text-center mb-5" style={{ marginTop: "6%" }}>
            Explore different account types
          </h3>
          <div className="container overflow-hidden">
            <div className="row gy-5 ">
              <div className="col-4">
                <div className="card p-3 shadow-sm h-100">
                  <div className="card-body">
                    <div className="p-3">
                      <h4 className="mb-3">Individual Account</h4>
                      <p>Invest in equity, mutual funds and derivatives</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card p-3 shadow-sm h-100">
                  <div className="card-body">
                    <div className="p-3">
                      <h4 className="mb-3">HUF Account</h4>
                      <p>Make tax-efficient investments for your family</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card p-3 shadow-sm h-100">
                  <div className="card-body">
                    <div className="p-3">
                      <h4 className="mb-3">NRI Account</h4>
                      <p>
                        Invest in equity, mutual funds, debentures, and more
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card p-3 shadow-sm h-100">
                  <div className="card-body">
                    <div className="p-3">
                      <h4 className="mb-3">Minor Account</h4>
                      <p>
                        Teach your little ones about money & invest for their
                        future with them
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card p-3 shadow-sm h-100">
                  <div className="card-body">
                    <div className="p-3">
                      <h4 className="mb-3">Corporate / LLP/ Partnership</h4>
                      <p>Manage your business surplus and investments easily</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;

import React from "react";

function FaqS() {
  return (
    <div className="container mt-4">
      <h2 className=" fs-3" style={{ marginTop: "6%" }}>
        FAQs
      </h2>
      <div className="row mt-4">
        <select class="form-select" aria-label="Default select example">
          <option selected>What is a Zerodha account</option>
          <option>
            A Zerodha account is a combined demat and trading account that
            allows investors to buy, sell, and hold securities digitally.
          </option>
        </select>
      </div>
      <div className="row mt-4">
        <select class="form-select" aria-label="Default select example">
          <option selected>
            What documents are required to open a demat account?
          </option>
          <option>
            The following documents are required to open a Zerodha account
            online :-{" "}
          </option>
          <option>1. PAN number</option>
          <option>
            2. Aadhaar Card (Linked with a phone number for OTP verification)
          </option>
          <option>
            3. Cancelled cheque or bank account statement (To link your bank
            account)
          </option>
          <option>
            4. Income proof (Required only if you wish to trade in Futures &
            options)
          </option>
        </select>
      </div>
      <div className="row mt-4">
        <select class="form-select" aria-label="Default select example">
          <option selected>Is Zerodha account opening free?</option>
          <option value="1">Yes, It is completely free.</option>
        </select>
      </div>
      <div className="row mt-4">
        <select class="form-select" aria-label="Default select example">
          <option selected>
            Are there any AMC (Account Maintenance Charges) for a demat account?
          </option>
          <option value="1">
            There is no AMC for the first year on all new resident individual
            accounts opened from June 1, 2026. From the second year,charges
            depend
          </option>
          <option> on the account type.</option>
          <option>
            For Basic Services Demat Account (BSDA): Zero charges on holdings up
            to ₹4 lakh; ₹100/year between ₹4 lakh and ₹10 lakh.
          </option>
          <option>
            For non-Basic Services Demat Account: ₹300 per year + GST.
          </option>
        </select>
      </div>
      <div className="row mt-4">
        <select class="form-select" aria-label="Default select example">
          <option selected>
            Can I open a demat account without a bank account?
          </option>
          <option value="1">
            To open a demat account, you must have a bank account in your name.
          </option>
          <option>
            If UPI verification is completed successfully, no proof of bank is
            needed. However, if bank verification fails, you'll need to provide
            either a
          </option>
          <option>
            cancelled cheque or a bank statement to link your bank account to
            Zerodha.
          </option>
        </select>
      </div>
      <div className="row mt-4">
        <select class="form-select" aria-label="Default select example">
          <option selected>
            What is a Basic Services Demat Account (BSDA)?
          </option>
          <option value="1">
            BSDA is a demat account designed for retail investors with smaller
            holdings. It automatically applies if you have only one demat
            account per PAN
          </option>
          <option>
            and holdings of up to ₹10 lakhs in it. You will not be charged any
            Account Maintenance Charge (AMC) for holdings up to ₹4 lakhs value,
            and only
          </option>
          <option>
            ₹25/quarter if holdings are between ₹4 lakhs and ₹10 lakhs.
          </option>
        </select>
      </div>
      <div className="row mt-4">
        <select class="form-select" aria-label="Default select example">
          <option selected>
            Can I open a demat and trading account using the mobile app?
          </option>
          <option value="1">
            Yes, You can open a demat and trading account completely online
            using the Zerodha Kite mobile app, available on Android and iOS.
          </option>
        </select>
      </div>
    </div>
  );
}

export default FaqS;

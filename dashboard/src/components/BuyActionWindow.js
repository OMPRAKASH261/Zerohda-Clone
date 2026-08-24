import React, { useState, useContext } from "react";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3003";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const generalContext = useContext(GeneralContext);

  const handleBuyClick = async () => {
    const quantity = Number(stockQuantity);
    const price = Number(stockPrice);

    if (!Number.isFinite(quantity) || quantity <= 0 || !Number.isFinite(price) || price <= 0) {
      setError("Enter a quantity and price greater than zero.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const payload = {
        name: uid,
        qty: quantity,
        price,
        mode: "BUY",
      };

      await axios.post(`${API_URL}/newOrder`, payload);
    } catch (err) {
      console.error("Buy request failed:", err);
      setError("Unable to place order. Please start the backend and try again.");
      return;
    } finally {
      setIsSubmitting(false);
    }

    if (generalContext && typeof generalContext.closeBuyWindow === "function") {
      generalContext.closeBuyWindow();
    }
  };

  const handleCancelClick = () => {
    if (generalContext && typeof generalContext.closeBuyWindow === "function") {
      generalContext.closeBuyWindow();
    }
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              min="0.01"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick} disabled={isSubmitting}>
            {isSubmitting ? "Placing..." : "Buy"}
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
      {error && <p className="order-error" role="alert">{error}</p>}
    </div>
  );
};

export default BuyActionWindow;

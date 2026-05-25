import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./OrderConfirmation.css";

const OrderConfirmation = () => {
  const orderId = "ORD" + Math.floor(Math.random()*1000000);

  return (
    <div className="order-container">
      <div className="order-card">
        <FaCheckCircle className="success-icon" />
        <h1>Order Confirmed!</h1>

        <p className="message">
          Thank you for shopping with us. Your order has been placed
          successfully.
        </p>

        <div className="order-details">
          <p>
            <strong>Order ID:</strong> {orderId}
          </p>

          <p>
            <strong>Estimated Delivery:</strong> 3 - 5 Days
          </p>

          <p>
            <strong>Payment:</strong> Successful
          </p>
        </div>

        <div className="button-group">
          <button className="track-btn">Track Order</button>

          <button className="shop-btn">Continue Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
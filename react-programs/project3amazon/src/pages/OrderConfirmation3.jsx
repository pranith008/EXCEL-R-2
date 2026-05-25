import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./OrderConfirmation.css";
import { useLocation } from 'react-router-dom'
import {jsPDF} from 'jspdf'

const OrderConfirmation3 = () => {
  const location = useLocation()
  const {billingDetails,paymentmode} = location.state
  const {
    carttotal,
    shippingFee,
    discount,
    totalPayable,
    promocode ,
    address
  }= billingDetails
  
  const orderId = "ORD" + Math.floor(Math.random()*1000000);

  function downloadBill()
  {
     const doc = new jsPDF()
     doc.setFontSize(20)
     doc.text("Order Confirmed", 20, 20)
     doc.text(` Order ID  : ${orderId}`, 20,40)
     doc.text(` Cart Total  : ${carttotal}`,20,60)
     doc.text(` Shipping Fee  : ${shippingFee.toFixed(2)}`,20,80)
     doc.save('Invoice')
  }

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
            <strong>Order ID: </strong> {orderId}
          </p>
          <p> 
           <strong> Cart Total : </strong> {carttotal}
          </p>
          <p>
            <strong> Shipping Fee : </strong> {shippingFee.toFixed(2)}
          </p>
          <p> 
           <strong> Discount : </strong> {discount.toFixed(2)}
          </p>
          <p> 
           <strong> Promocode : </strong> {promocode}
          </p>
          <p> 
           <strong> Total Payable : </strong> {totalPayable.toFixed(2)}
          </p>
          <p>
            <strong> Payment Mode : </strong> {paymentmode}
          </p>
          <p> 
           <strong>Shipping Address : </strong>{address}
          </p>
          <p>
            <strong>Estimated Delivery:</strong> 3 - 5 Days
          </p>
        </div>

        <div className="button-group">
          <button className="track-btn">Track Order</button>
          <button className="shop-btn">Continue Shopping</button>
          <button onClick={downloadBill} className="shop-btn">Download Bill</button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation3;
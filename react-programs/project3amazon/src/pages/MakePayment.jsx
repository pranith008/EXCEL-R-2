import React, { useContext, useState } from 'react'
import './MakePayment.css' 
import { useNavigate } from 'react-router-dom'
import ProductContext from '../contexts/ProductContext'
const MakePayment = () => {

    const navigate = useNavigate()
    const { emptyTheCart } = useContext(ProductContext)
    const[paymentmode, setPaymentmode]=useState("credit-card")
    const[carddetails, setCarddetails]=useState({
      cardNumber:"",
      expiryDate:"",
      cvv:""
    })
    function handlePaymentChange(event)
    {
      setPaymentmode(event.target.value)
    }

    function populateCardDetails(event)
    {
      const{name,value}=event.target
      setCarddetails(prev=>(
        {...prev, [name]:value}
      ))
    }

    function proceedToPayment()
    {
        if((paymentmode==="credit-card" || paymentmode==="debit-card"))
        {
          if(carddetails.cardNumber==="" || carddetails.expiryDate==="" || carddetails.cvv==="")
          {
            alert('Please ente valid data')
            return
          }
        }
        emptyTheCart()
        navigate("/proceed")
    }
  return (

   
    <>
        <div className='payment-container'>
            <div className='input-methods'>
              <h2>Select Payment Methods</h2>
                <div>
                    <label htmlFor='credit-method'>Credit Card</label>
                    <input
                    type='radio'
                    name='payment-method'
                    className='ms-2'
                    id='credit-method'
                    value='credit-card'
                    onChange={handlePaymentChange}
                    checked={paymentmode === "credit-card"}
                    />

                </div><br />

                <div>
                    <label htmlFor='debit-method'>Debit Card</label>
                    <input
                    type='radio'
                    name='payment-method'
                    className='ms-2'
                    id='debit-method'
                    value='debit-card'
                    onChange={handlePaymentChange}
                    checked={paymentmode === "debit-card"}
                    />

                </div><br />

                <div>
                    <label htmlFor='cod'>Cash On Delivery</label>
                    <input
                    type='radio'
                    name='payment-method'
                    className='ms-2'
                    id='cod'
                    value='cod'
                    onChange={handlePaymentChange}
                    checked={paymentmode === "cod"}
                    />

                </div> <br />

              {
              (paymentmode==="credit-card" || paymentmode==="debit-card") && (
                <div>
                  <h4>Card Details</h4>
                  <div className='mb-3 d-flex align-items-center'>
                    <label htmlFor='card-number' className='me-3' style={{width:"140px"}}>Card Number</label>
                    <input
                    type="text"
                    id="card-number"
                    name="cardNumber"
                    value={carddetails.cardNumber}
                    onChange={populateCardDetails}
                    placeholder='1234 5678 9898'
                    className='form-control w-25'
                    />
                  </div>

                   <div className='mb-3 d-flex align-items-center'>
                    <label htmlFor="expiry-date" className='me-3' style={{width:"140px"}}>Expiry Date</label>
                    <input
                    type="text"
                    id="expiry-date"
                    name="expiryDate"
                    value={carddetails.expiryDate}
                    onChange={populateCardDetails}
                    placeholder='MM/YY'
                    className='form-control w-25'
                    />
                  </div>

                  <div className='mb-3 d-flex align-items-center'>
                    <label htmlFor="cvv-number" className='me-3' style={{width:"140px"}}>CVV Number</label>
                    <input
                    type="text"
                    id="cvv-number"
                    name="cvv"
                    value={carddetails.cvv}
                    onChange={populateCardDetails}
                    placeholder='Enter cvv number'
                    className='form-control w-25'
                    />
                  </div>
                </div>
              )
              
              }

            </div> <br /><br />

            <div>
              <button onClick={proceedToPayment} className="btn btn-dark d-block mx-auto mt-3 px-5">
                        Proceed To Payment
              </button>
            </div>
        </div>
    </>
  )
}

export default MakePayment
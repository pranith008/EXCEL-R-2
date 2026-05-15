import React, { useContext, useState } from 'react'
import './MakePayment.css'
import { useNavigate } from 'react-router-dom'
import ProductContext from '../contexts/ProductContext'

const MakePayment = () => {

    const navigate = useNavigate()

    const { emptyTheCart } = useContext(ProductContext)

    const [paymentmode, setPaymentmode] = useState("credit-card")

    const [carddetails, setCarddetails] = useState({
        cardNumber: "",
        expiryDate: "",
        cvv: ""
    })

    function handlePaymentChange(event) {
        setPaymentmode(event.target.value)
    }

    function populateCardDetails(event) {

        const { name, value } = event.target

        setCarddetails((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    function proceedToPayment() {

        if (
            paymentmode === "credit-card" ||
            paymentmode === "debit-card"
        ) {

            if (
                carddetails.cardNumber === "" ||
                carddetails.expiryDate === "" ||
                carddetails.cvv === ""
            ) {
                alert("Please enter valid card details")
                return
            }
        }

        emptyTheCart()

        navigate("/proceed")
    }

    return (

        <div className='payment-container'>

            <h2>Select Payment Methods</h2>

            <div className='payment-option'>

                <label htmlFor='credit-method'>
                    Credit Card
                </label>

                <input
                    type='radio'
                    id='credit-method'
                    name='payment-method'
                    value='credit-card'
                    checked={paymentmode === "credit-card"}
                    onChange={handlePaymentChange}
                />

            </div>

            <div className='payment-option'>

                <label htmlFor='debit-method'>
                    Debit Card
                </label>

                <input
                    type='radio'
                    id='debit-method'
                    name='payment-method'
                    value='debit-card'
                    checked={paymentmode === "debit-card"}
                    onChange={handlePaymentChange}
                />

            </div>

            <div className='payment-option'>

                <label htmlFor='cod'>
                    Cash On Delivery
                </label>

                <input
                    type='radio'
                    id='cod'
                    name='payment-method'
                    value='cod'
                    checked={paymentmode === "cod"}
                    onChange={handlePaymentChange}
                />

            </div>

            {
                (paymentmode === "credit-card" ||
                    paymentmode === "debit-card") && (

                        <div className='card-details'>

                            <h3>Card Details</h3>

                            <div className='input-group'>

                                <label>Card Number</label>

                                <input
                                    type='text'
                                    name='cardNumber'
                                    value={carddetails.cardNumber}
                                    onChange={populateCardDetails}
                                    placeholder='1234 5678 9898'
                                    className='payment-input'
                                />

                            </div>

                            <div className='input-group'>

                                <label>Expiry Date</label>

                                <input
                                    type='text'
                                    name='expiryDate'
                                    value={carddetails.expiryDate}
                                    onChange={populateCardDetails}
                                    placeholder='MM/YY'
                                    className='payment-input'
                                />

                            </div>

                            <div className='input-group'>

                                <label>CVV Number</label>

                                <input
                                    type='password'
                                    name='cvv'
                                    value={carddetails.cvv}
                                    onChange={populateCardDetails}
                                    placeholder='Enter CVV'
                                    className='payment-input'
                                />

                            </div>

                        </div>
                    )
            }

            <button
                onClick={proceedToPayment}
                className='payment-btn'
            >
                Proceed To Payment
            </button>

        </div>
    )
}

export default MakePayment
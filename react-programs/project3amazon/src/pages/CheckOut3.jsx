import React, { useContext, useState } from 'react'
import './CheckOut.css'
import ProductContext from '../contexts/ProductContext'
import { useNavigate } from 'react-router-dom'
const CheckOut3 = () => {
    const navigate = useNavigate()
    const { products, cartitems } = useContext(ProductContext)
    const [promocode, setPromocode] = useState()
    const [isPromoApplied, setIsPromoApplied] = useState(false)
    const [discount, setDiscount] = useState(0)
    const [address, setAddress] = useState("")
    function calculateTotal() {
        return products.reduce(
            (total, prod) => {
                const quantity = cartitems[prod.id] || 0;
                return total + (prod.price * quantity)
            }, 0
        )
    }

    let carttotal = calculateTotal()
    //let shippingFee = carttotal * 0.05
    const [shippingFee, setShippingFee] = useState(carttotal * 0.05)
    let totalPayable = carttotal + shippingFee
    function proceedToPayment() 
    {
        if(address)
        {
            navigate("/payment",
                {
                state:{
                    carttotal,
                    shippingFee,
                    discount,
                    totalPayable : isPromoApplied? totalPayable-discount : totalPayable,
                    promocode : isPromoApplied? promocode : 'NA',
                    address
                }
                }
            )
        }
       
        else
        alert('Please enter shipping address')
    }

    function handlePromoOnChange(event) {
        setPromocode(event.target.value)
    }
    console.log(promocode)

    function applyPromoCode() {
        if (promocode === "WEL10") {
            setIsPromoApplied(true)
            setDiscount(0.10 * carttotal)
            totalPayable = totalPayable - discount
            setShippingFee(totalPayable * 0.05)
        }
        else {
            alert(`${promocode} is Invalid code`)
        }
    }

    function populateAddress(event)
    {
        setAddress(event.target.value)
    }
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center mt-5">

                <div className="card shadow-lg p-4 w-50 rounded-4">
                    {!isPromoApplied ? <div>
                        <h1 className="text-center mb-4 text-primary">
                            Cart Summary
                        </h1>

                        <div className="d-flex justify-content-between border-bottom py-3">
                            <p className="fw-semibold m-0">Cart Total Amount</p>
                            <p className="m-0">$ {carttotal.toFixed(2)}</p>
                        </div>

                        <div className="d-flex justify-content-between border-bottom py-3">
                            <p className="fw-semibold m-0">Shipping Fee</p>
                            <p className="m-0">$ {shippingFee.toFixed(2)}</p>
                        </div>

                        <div className="d-flex justify-content-between py-3">
                            <p className="fw-bold fs-5 m-0">Total Payable</p>
                            <p className="fw-bold fs-5 text-success m-0">
                                $ {totalPayable.toFixed(2)}
                            </p>
                        </div>

                    </div>

                        :
                        <div>
                            <h1 className="text-center mb-4 text-primary">
                                Cart Summary
                            </h1>

                            <div>
                                <div className="d-flex justify-content-between border-bottom py-3">
                                    <p className="fw-semibold m-0">Cart Total Amount</p>
                                    <p className="m-0">$ {(carttotal - discount).toFixed(2)}</p>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between border-bottom py-3">
                                <p className="fw-semibold m-0">Shipping Fee</p>
                                <p className="m-0">$ {shippingFee.toFixed(2)}</p>
                            </div>

                            <div className="d-flex justify-content-between py-3">
                                <p className="fw-bold fs-5 m-0">Total Payable</p>
                                <p className="fw-bold fs-5 text-success m-0">
                                    $ {(totalPayable - discount).toFixed(2)}
                                </p>
                            </div>
                        </div>
                    }

                    <div className="d-flex justify-content-between py-3">
                        <p className="fw-bold fs-5 m-0">Do you have any Coupon?</p>
                        <input type="text"
                            placeholder='Promo Code'
                            value={promocode}
                            onChange={handlePromoOnChange}
                        />
                        <button onClick={applyPromoCode} className="coupon-btn apply-btn">Apply</button>
                        <button onClick={()=>setIsPromoApplied(false)} className="coupon-btn apply-btn">Remove</button>
                    </div>

                    <div>
                        <h2>Shipping Address</h2>
                        <textarea
                            name="address"
                            value={address}
                            onChange={populateAddress}
                            placeholder='Enter Shipping Address'
                            rows="5"
                            className="shipping-textarea"
                        />
                    </div>

                    <button onClick={proceedToPayment} className="btn btn-primary w-100 mt-3">
                        Proceed To Payment
                    </button>

                </div>

            </div>
        </>
    )
}

export default CheckOut3
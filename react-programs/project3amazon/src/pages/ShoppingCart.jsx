import React, { useContext } from 'react'
import './ShoppingCart.css'
import ProductContext from '../contexts/ProductContext'
import { useNavigate } from 'react-router-dom'

const ShoppingCart = () => {
    const navigate = useNavigate()
    const {
        products,
        cartitems,
        removeFromCart,
        addToCart
    } = useContext(ProductContext)

    function proceedToCheckout() {
        navigate("/checkout")
    }

    return (
        <>

            <div className='cart-container'>

                <table>

                    <thead>
                        <tr>
                            <th>Product Title</th>
                            <th>Product Image</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Total Price</th>
                            <th>Remove Qty</th>
                            <th>Add Qty</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            products
                                .filter((prod) => cartitems[prod.id] > 0)
                                .map((prod) => {

                                    return (

                                        <tr key={prod.id}>

                                            <td>{prod.title}</td>

                                            <td>
                                                <img
                                                    id='prod-image'
                                                    src={prod.image}
                                                    alt={prod.title}
                                                />
                                            </td>

                                            <td>
                                                {cartitems[prod.id]}
                                            </td>

                                            <td>
                                                $ {prod.price}
                                            </td>

                                            <td>
                                                $  {(cartitems[prod.id] * prod.price).toFixed(2)}
                                            </td>

                                            <td>
                                                <button
                                                    className='cart-btn remove-btn'
                                                    onClick={() => removeFromCart(prod.id)}
                                                >
                                                    Remove
                                                </button>
                                            </td>

                                            <td>
                                                <button
                                                    className='cart-btn add-btn'
                                                    onClick={() => addToCart(prod.id)}
                                                >
                                                    Add
                                                </button>
                                            </td>

                                        </tr>
                                    )
                                })
                        }

                    </tbody>

                </table>

                <button
                    onClick={proceedToCheckout}
                    className='checkout-btn'
                >
                    Proceed To Checkout
                </button>

            </div>

        </>
    )
}

export default ShoppingCart
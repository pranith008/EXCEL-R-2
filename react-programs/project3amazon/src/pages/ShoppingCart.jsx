import React, { useContext } from 'react'
import './ShoppingCart.css'
import ProductContext from '../contexts/ProductContext'
import { useNavigate } from 'react-router-dom'

const ShoppingCart = () => {
    const navigate= useNavigate()
    const { products, cartitems,removeFromCart,addToCart } = useContext(ProductContext)
    function proceedToCheckout()
    {
        navigate("/checkout")
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Product Title</th>
                        <th>Product Image</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Total Price</th>
                        <th>ADD Qty</th>
                        <th>Remove Qty</th>
                    </tr>
                </thead>
                <tbody>
                    {products   
                        .filter ((prod) =>cartitems[prod.id] > 0)
                        .map((prod) => {
                            if (cartitems[prod.id] > 0) {
                                return (
                                    <tr key={prod.id}>
                                        <td>{prod.title}</td>
                                        <td><img id="prod-image" src={prod.image} /></td>
                                        <td>{cartitems[prod.id]}</td>
                                        <td>{prod.price}</td>
                                        <td>{cartitems[prod.id] * prod.price}</td>
                                        <td><button className="btn btn-danger w-100 mt-auto"
                                            onClick={() => removeFromCart(prod.id)}
                                        >
                                            Remove
                                        </button></td>
                                        <td><button className="btn btn-primary w-100 mt-auto"
                                            onClick={() => addToCart(prod.id)}
                                        >
                                            Add
                                        </button>
                                        </td>
                                    </tr>
                                )
                            }
                        }
                        )}
                </tbody>
            </table>
            <button onClick={proceedToCheckout}>Proceed to Checkout</button>
        </>
    )
}

export default ShoppingCart
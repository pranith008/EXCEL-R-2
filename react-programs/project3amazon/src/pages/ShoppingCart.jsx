import React, { useContext } from 'react'
import './ShoppingCart.css'
import ProductContext from '../contexts/ProductContext'
const ShoppingCart = () => {

    const { products, cartitems,removeFromCart } = useContext(ProductContext)

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Product Title</th>
                        <th>Product Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Delete</th>
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
                                        <td>{cartitems[prod.id] * prod.price}</td>
                                        <td><button className="btn btn-dark w-100 mt-auto"
                                            onClick={() => removeFromCart(prod.id)}
                                        >
                                            Remove
                                        </button></td>
                                    </tr>
                                )
                            }
                        }
                        )}
                </tbody>
            </table>
        </>
    )
}

export default ShoppingCart
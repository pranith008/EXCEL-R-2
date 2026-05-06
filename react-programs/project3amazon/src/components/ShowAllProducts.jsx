import React from 'react'
import './ShowAllProducts.css'
import products from '../data/allproducts'

const ShowAllProducts = () => {
    console.log(products)
    return (
        <><div className='products-grid'>
            {products.map(
                (product, index) => {
                    return <div key={index} className="card" style={{'width':'18rem'}}>
                        <img className="card-img-top" src={product.image} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">{product.category}</p>
                            <a href="#" className="btn btn-primary">Add To Cart</a>
                        </div>
                    </div>
                }
            )}
        </div>
        </>
    )
}

export default ShowAllProducts
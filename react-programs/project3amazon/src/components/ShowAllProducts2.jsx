import React from 'react';
import './ShowAllProducts.css';
import products from '../data/allproducts';
import './ShowAllProducts2.css'

const ShowAllProducts2 = () => {
    return (
        <div className="container py-5">
            <div className="row g-4">
                {products.map((product, index) => {
                    return (
                        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="card h-100 shadow-sm border-0 product-card">
                                
                                <div className="image-wrapper">
                                    <img 
                                        src={product.image} 
                                        className="card-img-top product-img" 
                                        alt={product.title} 
                                    />
                                </div>

                                <div className="card-body d-flex flex-column">
                                    <h6 className="card-title fw-bold text-truncate">
                                        {product.title}
                                    </h6>

                                    <p className="text-muted small mb-1">
                                        {product.category}
                                    </p>

                                    <p className="card-text small flex-grow-1">
                                        {product.description.substring(0, 60)}...
                                    </p>

                                    <button className="btn btn-dark w-100 mt-auto">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ShowAllProducts2;
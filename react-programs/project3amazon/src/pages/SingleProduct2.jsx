import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../components/Products'
import axios from 'axios'
import Breadcrumb from '../components/Breadcrumb'
import ProductContext from '../contexts/ProductContext'

const SingleProduct2 = () => {
    const { prodid } = useParams()

    const {products} = useContext(ProductContext)

    const [product, setProduct] = useState(null)

    useEffect(() => {

        const singleProduct = products.find(
            (prod) => prod.id === Number(prodid)
        )

        setProduct(singleProduct)

    }, [prodid])

    return (
        <>
            {product ?
                <>
                    <Breadcrumb product={product} />
                    <Product product={product} />
                </> : <h1>Fetching Product Info..</h1>}
        </>
    )
}

export default SingleProduct2
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../components/Products'
import axios from 'axios'
import Breadcrumb from '../components/Breadcrumb'

const SingleProduct = () => {
   const {prodid} = useParams()
   console.log(prodid)

   const [product,setProduct]=useState(null)
   useEffect(
    ()=>{
        loadSingleProduct()
    },[prodid]
   )

   async function loadSingleProduct()
   {
        try {
            const apiproducts = await axios.get(`https://fakestoreapi.com/products/${prodid}`)
            //const apiproducts = await axios.get("http://localhost:8087/products/getAllProducts")
            console.log(apiproducts) //single object {header,status,ok, data}
            setProduct(apiproducts.data)
        }
        catch (error) {
            console.log(error)
        }
   }
  return (
    <>
    {product?
    <>
    <Breadcrumb product={product} />
    <Product product={product} /> 
    </>: <h1>Fetching Product Info..</h1>}
    </>
  )
}

export default SingleProduct
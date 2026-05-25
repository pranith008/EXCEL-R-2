import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductContext from './ProductContext';

function ProductContextProvider  ({children}) {

    const[products,setProducts]=useState()
    const[cartitems,setCartitems]=useState(getDefaultCartItems())

    const [billingDetails,setBillingDetails]=useState({})
    const [paymentMode,setPaymentMode]=useState("")

    function getDefaultCartItems()
    {
        return JSON.parse(localStorage.getItem("amazoncart")) || {}
    }

    function addToCart(prodId)  //prodId=17
    {
        setCartitems(prev=>({...prev, [prodId]:(prev[prodId] || 0)+1}))                  // prev = {}
    }

    function removeFromCart(prodId)
    {
        setCartitems(
            prev=>{
                const newCart={...prev}
                if(newCart[prodId] > 0)
                    newCart[prodId]-=1

                return newCart
            }
        )
    }

    function emptyTheCart()
    {
        setCartitems({})
        localStorage.removeItem("amazoncart")
    }

    function totalCartItems()
    {
        let sum=0
        for(let key in cartitems)
        {
            if(cartitems[key]>0)
            {
                sum+=cartitems[key]
            }
        }
        return sum

    }

    useEffect(
        ()=>{
                localStorage.setItem("amazoncart",JSON.stringify(cartitems))
        },[cartitems]
    )
    useEffect(
        ()=>{
        loadData();
        },[]
    )

    async function loadData() {
        try {
            // const apiproducts = await axios.get("https://fakestoreapi.com/products")
            const apiproducts = await axios.get("http://localhost:8087/products/getAllProducts")
            console.log(apiproducts) //single object {header,status,ok, data}
            setProducts(apiproducts.data)
        }
        catch (error) {
            console.log(error)
        }
    }

  return (
   <ProductContext.Provider value={{products,cartitems,addToCart,removeFromCart,totalCartItems,emptyTheCart,billingDetails,setBillingDetails,paymentMode,setPaymentMode}}>
    {children}
   </ProductContext.Provider>
  )
}

export default ProductContextProvider
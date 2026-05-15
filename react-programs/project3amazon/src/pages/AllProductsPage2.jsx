import React, { useContext } from 'react';
import './AllProductsPage.css';
import Product from '../components/Products';
import FilterBar from '../components/FilterBar';
import { useState } from 'react';
import FilterByCategoryBar from '../components/FilterByCategoryBar';
import FilterByPrice from '../components/FilterByPrice';
import FilterByPrice2 from '../components/FilterByPrice2';
import SearchBar from '../components/SearchBar';
import { useEffect } from 'react';
import axios from 'axios'
import Breadcrumb from '../components/Breadcrumb';
import ProductContext from '../contexts/ProductContext';

const AllProductsPage2 = () => {

    const [products, setProducts] = useState([])
    const [buproducts, setBuproducts] = useState([])

    const data=useContext(ProductContext)  //data={product:[...]}
    console.log(data.products)

    //const {products} = useContext(ProductContext)

    useEffect(
        ()=>{
           setProducts(data.products)
           setBuproducts(data.products)
           
        },[]
    )           


    const productCategories = buproducts.map(
        (prod) => prod.category
    )

    console.log(productCategories)

    const uniqueCategories = new Set(productCategories)
    console.log(uniqueCategories)

    const allCategories = [...uniqueCategories, 'All']
    console.log(allCategories)

    function filterByCategory(userSelectedCategory) {
        if (userSelectedCategory === 'All') {
            setProducts(buproducts)
        }
        else {
            //console.log(userSelectedCategory)
            const filteredProducts = buproducts.filter(
                (prod) => prod.category === userSelectedCategory
            )

            //console.log(filteredProducts)
            setProducts(filteredProducts)
        }
    }

    function filterByPrice(basePrice) {
        const filteredProducts = buproducts.filter(
            (prod) => prod.price <= basePrice
        )

        setProducts(filteredProducts)
    }

    function filterByPriceNew(event) {
        console.log(event.target.value)
        const filteredProducts = buproducts.filter(
            (prod) => prod.price <= event.target.value
        )

        setProducts(filteredProducts)
    }

    function searchProduct(event) {
        let searchText = event.target.value;
        console.log(searchText)

        const searchedProducts = buproducts.filter(
            (prod) => (prod.title.toLowerCase().includes(searchText.toLowerCase())) || prod.description.toLowerCase().includes(searchText.toLowerCase()))

        setProducts(searchedProducts)
    }

    return (
        <>
            <FilterByCategoryBar categories={allCategories} handleClick={filterByCategory} />
            {/* <FilterByPrice handleClick={filterByPrice}/> */}
            <FilterByPrice2 handleChange={filterByPriceNew} />
            <SearchBar handleChange={searchProduct} />
            <div className="container py-5">
                <div className="row g-4">
                    {products.map((product, index) => {
                        return <Product key={index} product={product} />
                    })}
                </div>
            </div>
        </>
    );
}

export default AllProductsPage2
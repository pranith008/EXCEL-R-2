import React, { useState } from 'react'
import './AddProducts.css'
import productValidationRules from '../validations/ProductValidation.js'
import { useFormik } from 'formik';

const AddProducts1 = () => {
    const p1 = {
        title: "",
        price: 0,
        description: "",
        category: "",
        image: ""
    }

    const {
        errors,
        values,
        touched,
        handleBlur,
        handleSubmit,
        handleChange
    } = useFormik({
        initialValues: p1,
        validationSchema: productValidationRules,
        onSubmit: function () {
            saveData()
        },
    }
    )

    async function saveData() {
        try {
            const response = await fetch('http://localhost:8087/products/addProduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })

            if (response.ok)
                alert('Product added successfully')
            else
                alert('Error in adding Product')
        }
        catch (error) {
            console.log(error)

        }
    }
    return (
   <>
            <div className="add-product-container">

                <h1 className="add-product-title">
                    Add Product
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor='title'>Enter Product Title</label>
                        <input
                            type='text'
                            id='title'
                            name='title'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                        {errors.title && touched.title && (<p className='text-danger'>{errors.title}</p>)}
                    </div>

                    <div className="form-group">
                        <label htmlFor='price'>Enter Product Price</label>
                        <input
                            type='text'
                            id='price'
                            name='price'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.price}
                        />
                        {errors.price && touched.price && (<p className='text-danger'>{errors.price}</p>)}
                    </div>

                    <div className="form-group">
                        <label htmlFor='description'>Enter Product Description</label>
                        <input
                            type='text'
                            id='description'
                            name='description'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                        />
                        {errors.description && touched.description && (<p className='text-danger'>{errors.description}</p>)}
                    </div>

                    <div className="form-group">
                        <label htmlFor='category'>Enter Product Category</label>
                        <input
                            type='text'
                            id='category'
                            name='category'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.category}
                        />
                        {errors.category && touched.category && (<p className='text-danger'>{errors.category}</p>)}
                    </div>

                    <div className="form-group">
                        <label htmlFor='image'>Enter Product Image</label>
                        <input
                            type='text'
                            id='image'
                            name='image'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.image}
                        />
                        {errors.image && touched.image && (<p className='text-danger'>{errors.image}</p>)}
                    </div>
                    <div>
                        <button type="submit" className="add-btn">Add New Product</button>
                    </div>

                </form>
            </div>
            </>
            )
}

            export default AddProducts1
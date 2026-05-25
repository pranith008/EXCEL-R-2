import React, { useState } from 'react'

const AddProducts = () => {
    const p1={
        title: "",
        price: 0,
        description: "",
        category: "",
        image:""
    }
    const[values, setValues]=useState(p1)

    function handleOnChange(event)
    {
        const {name,value} = event.target
        setValues(prev=>({...prev,[name]:value}))
    }
     console.log(values)

    function handleSubmit(event)
    {
        event.preventDefault()
        saveData()
    }

    async function saveData()
    {
           try
           {
                const response=await fetch('http://localhost:8087/products/addProduct',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body : JSON.stringify(values)
            })

            if(response.ok)
                alert ('Product added successfully')
            else
                alert ('Error in adding Product')
        }
        catch(error)
        {
           console.log(error)

        }
    }
  return (
   <>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='title'>Enter Product Title</label>
            <input
            type='text'
            id='title'
            name='title'
            onChange={handleOnChange}
            value={values.title}
            />
        </div>

        <div>
            <label htmlFor='price'>Enter Product Price</label>
            <input
            type='text'
            id='price'
            name='price'
            onChange={handleOnChange}
            value={values.price}
            />
        </div>

        <div>
            <label htmlFor='description'>Enter Product Description</label>
            <input
            type='text'
            id='description'
            name='description'
            onChange={handleOnChange}
            value={values.description}
            />
        </div>

        <div>
            <label htmlFor='category'>Enter Product Category</label>
            <input
            type='text'
            id='category'
            name='category'
            onChange={handleOnChange}
            value={values.category}
            />
        </div>

        <div>
            <label htmlFor='image'>Enter Product Image</label>
            <input
            type='text'
            id='image'
            name='image'
            onChange={handleOnChange}
            value={values.image}
            />
        </div>
        <div>
            <button type="submit">Add New Product</button>
        </div>

        </form>
   </>
  )
}

export default AddProducts
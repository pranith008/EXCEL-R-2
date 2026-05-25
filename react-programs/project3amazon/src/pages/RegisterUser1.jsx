import React, { useState } from 'react'
import './RegisterUser.css'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import userValidationRules from '../validations/UserValidation.js'
import { useFormik } from 'formik';
const RegisterUser1 = () => {

    const u1 = {
        'username': "",
        'password': ""
    }
    const [flag, setFlag] = useState(true)

    function toggleFlag() {
        setFlag(!flag)
    }

    async function saveUser() {
        try {
            const response = await fetch('http://localhost:8087/registerUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })

            if (response.ok)
                alert('User added successfully')
            else
                alert('Error in adding User')
        }
        catch (error) {
            console.log(error)
        }
    }
    const{
            errors,
            values,
            touched,
            handleBlur,
            handleSubmit,
            handleChange
        } = useFormik({
            initialValues:u1,
            validationSchema:userValidationRules,
            onSubmit:function()
            {
                saveUser()
            },
        }
        )

    return (
        <>  
            <div className="register-container">

                <h1 className="register-title">
                    Register User
                </h1>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter Username"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                    />
                    {errors.username && touched.username && (<p className='text-danger'>{errors.username}</p>)}
                </div>

                <div className="input-group">
                    <input
                        type={flag ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {errors.password && touched.password && (<p className='text-danger'>{errors.password}</p>)}
                    {
                        flag
                            ? <FaEye className='show-hide' onClick={toggleFlag} />
                            : <FaEyeSlash className='show-hide' onClick={toggleFlag} />
                    }
                </div>

                <div>
                    <button type="submit" className="register-btn"> Add User </button>
                </div>

            </form>
        </div>
        </>
    )
}

export default RegisterUser1
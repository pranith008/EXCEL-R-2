import React, { useState } from 'react'
import './RegisterUser.css'
import userValidationRules from '../validations/UserValidation.js'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { FaEye, FaEyeSlash } from "react-icons/fa";
const LoginUser = () => {
    const navigate = useNavigate()
    const u1 = {
        'username': "",
        'password': ""
    }

    const [flag, setFlag] = useState(true)

    function toggleFlag() {
        setFlag(!flag)
    }


    async function loginUser() {
        try {
            await axios.post("http://localhost:8087/login", values)
                .then(result => {
                    console.log(result)
                    if (result.data === "success") {
                        alert('login successfull')
                        navigate("/")
                    }
                    else if (result.data === "no user") {
                        alert(`User with userame ${values.username} does not exist`)
                        navigate("/login")
                    }
                    else {
                        alert('Incorrect Password')
                        navigate("/login")
                    }
                })
        }
        catch (error) {
            console.log(error)
        }
    }

    const {
        errors,
        values,
        touched,
        handleBlur,
        handleSubmit,
        handleChange
    } = useFormik({
        initialValues: u1,
        validationSchema: userValidationRules,
        onSubmit: function () {
            loginUser()
        },
    }
    )
    return (
        <>
            <div className="register-container">

                <h1 className="register-title">
                    Login User
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
                    <button type="submit" className="register-btn"> Login </button>
                </div>

            </form>
        </div>
        </>
    )
}

export default LoginUser
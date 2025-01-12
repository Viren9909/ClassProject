import React, { useState, useEffect } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css"
import "../style/Login.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
    const [data, setData] = useState({ username: "", password: "" });
    const navigate = useNavigate()

    const handleOnChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData()
        form.append("username", data.username)
        form.append("password", data.password)
        // console.log(data)
        try {
            const response = await fetch("http://localhost:8000/api/v1/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            const json = await response.json()
            if (json.success === 200) {
                const user = json.data.user
                localStorage.setItem("user", JSON.stringify(user))
                // console.log(localStorage.getItem("user"))
                navigate('/')
            }
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <div className=''>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        Cypher
                    </Link>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User name</label>
                                    <input type="text" onChange={handleOnChange} name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" onChange={handleOnChange} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <Link to="/" className="text-sm font-medium text-primary-600 hover:underline dark:text-gray-50">Forgot password?</Link>
                                </div>
                                <button type="submit" onClick={handleSubmit} className="btn-style focus:outline-none focus:shadow-outline"> Login </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-50">
                                    Don’t have an account yet? <Link to="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
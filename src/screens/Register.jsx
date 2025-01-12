import React, { useState, useRef } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css"
import "../style/Register.css"
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        phone: '',
        password: '',
        role: '',
        address: '',
        profileImage: ''
    });
    const navigate = useNavigate()
    const [preview, setPreview] = useState(null)
    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                console.log(reader.result)
                setPreview(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const fileInputRef = useRef(null);

    const handleChange = (event) => {
        if (event.target.name === "profileImage") {
            handleImageChange(event)
            setFormData({ ...formData, profileImage: event.target.files[0] })
        }
        else {
            setFormData({ ...formData, [event.target.name]: event.target.value });
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(formData)
        const form = new FormData();
        form.append('fullName', formData.fullName);
        form.append('username', formData.username);
        form.append('email', formData.email);
        form.append('phone', formData.phone);
        form.append('password', formData.password);
        form.append('role', formData.role);
        form.append('address', formData.address);
        if (formData.profileImage) {
            form.append('profileImage', formData.profileImage);
        }
        try {
            const response = await axios.post("http://localhost:8000/api/v1/users/register", form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            )
            if (response.status === 200){
                localStorage.setItem("user",JSON.stringify(response.data)) // need to be change
                navigate("/")
            }

        } catch (error) {
            console.error(error)
        }
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className='h-full w-full dark'>
            <div className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-screen-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                                Create an account
                            </h1>
                            {/* form */}
                            <form className="space-y-2" action="submit" encType='multipart/form-data'>

                                <div className="flex flex-col items-center">
                                    <div
                                        className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300 cursor-pointer" onClick={handleImageClick} >
                                        <img src={preview} alt="Profile" className="w-full h-full object-cover" />
                                    </div>
                                    <input type="file" id="file-upload" onChange={handleChange} name='profileImage' accept="image/*" ref={fileInputRef} className="hidden" />
                                </div>


                                <div className='flex justify-between'>
                                    <div className='w-1/2 mr-2 relative'>
                                        <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                                        <input type="text" onChange={handleChange} name="fullName" id="fullName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg. firstName lastName" required="" />
                                    </div>
                                    <div className='w-1/2 ml-2'>
                                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                                        <input type="text" onChange={handleChange} name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg. user1234" required="" />
                                    </div>
                                </div>


                                <div className='flex'>
                                    <div className='w-1/2 mr-2'>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                        <input type="text" onChange={handleChange} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-600 focus:border-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg. domain@gmail.com" required="" />
                                    </div>
                                    <div className='w-1/2 ml-2'>
                                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Phone</label>
                                        <input type="tel" onChange={handleChange} name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg. 1234567890" required="" />
                                    </div>
                                </div>


                                <div className='flex'>
                                    <div className='w-1/2 mr-2'>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" onChange={handleChange} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <div className='w-1/2 ml-2'>
                                        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                                        <input type="password" onChange={handleChange} name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                </div>


                                <div className='flex'>
                                    <div className="flex w-1/2 mr-2 items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input checked={formData.role === "seller"} id="seller" type="radio" value="seller" onChange={handleChange} name="role" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="seller" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Seller</label>
                                    </div>
                                    <div className="flex w-1/2 ml-2 items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input checked={formData.role === "buyer"} id="buyer" type="radio" value="buyer" onChange={handleChange} name="role" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="buyer" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Buyer</label>
                                    </div>
                                </div>


                                <div className="max-w-sm mx-auto">
                                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Address</label>
                                    <textarea id="address" name='address' onChange={handleChange} rows="2" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                                </div>


                                <button type="submit" onClick={handleSubmit} className="btn-style focus:outline-none focus:shadow-outline"> Create Account </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-blue-500">Login here</Link>
                                </p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
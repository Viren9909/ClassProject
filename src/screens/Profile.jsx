import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import TransactionHistory from '../components/TransactionHistory';
import React from 'react';

function Profile() {
    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString)
    const rating = user ? user.rating : 0;

    return (
        <div className=''>
            <div className='dark:bg-gray-800 dark:text-gray-100'>
                <Navbar />
                <div className='grid grid-rows-1 sm:grid-col-1'>
                    <div className="flex flex-col mt-5 items-center">
                        <img src={user ? user.profileImage : null} alt="User Profile" className="w-24 h-24 rounded-full mb-4" />
                        <h1 className="text-2xl font-bold mb-2">{user ? user.username : null}</h1>
                        <p className="text-gray-400 mb-4">{user ? user.email : null}</p>
                        <h2 className="text-xl font-semibold mb-2">User Rating</h2>
                        <div className="flex items-center">
                            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                <svg className={`w-4 h-4 ${rating >= 1 ? "text-yellow-300" : "text-gray-200 dark:text-gray-600"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className={`w-4 h-4 ${rating >= 2 ? "text-yellow-300" : "text-gray-200 dark:text-gray-600"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className={`w-4 h-4 ${rating >= 3 ? "text-yellow-300" : "text-gray-200 dark:text-gray-600"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className={`w-4 h-4 ${rating >= 3.5 ? "text-yellow-300" : "text-gray-200 dark:text-gray-600"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className={`w-4 h-4 ${rating >= 4.6 ? "text-yellow-300" : "text-gray-200 dark:text-gray-600"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{rating}</span>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='p-5'>
                        <div className="mx-auto">
                            <div className='mt-2'>
                                <h2 className="text-xl font-semibold">Address</h2>
                                <p>{user ? user.address : null}</p>
                            </div>
                            <div className='mt-2'>
                                <h2 className='text-xl font-semibold'>Mobile No</h2>
                                <p>{user ? user.phone : null}</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 sm:mx-auto md:mx-auto">
                        <div className='mx-auto'>
                            <div className='mt-2'>
                                <h2 className="text-xl font-semibold">No Of Product Sell</h2>
                                <p>{user ? user.noOfProductsToSell : null}</p>
                            </div>
                            <div className='mt-2'>
                                <h2 className='text-xl font-semibold'>Full Name</h2>
                                <p>{user ? user.fullName : null}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-evenly'>
                    <div className='mx-auto mb-7'>
                        <Link to="/producform" className="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
                            Add Product For Sell
                        </Link>
                    </div>
                </div>

                <hr className='mb-12'></hr>

                <TransactionHistory />
            </div>
        </div>
    );
}

export default Profile;

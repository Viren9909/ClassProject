import React from 'react'
import Transaction from './Transaction'

const TransactionHistory = () => {
    const transaction = {
        id: 12345678,
        product: "iphone",
        date: "12-12-2024",
        amount: 150000,
        buyer: "you",
        seller: "Ramesh"
    }
    return (
        <div>
            <div className=''>

                <button id="dropdownBgHoverButton" data-dropdown-toggle="dropdownBgHover" className="text-gray-900 dark:text-gray-100 bg-gray-100 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-md px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-300 mt-3" type="button">
                    Filter
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>

                {/* Dropdown menu */}
                <div id="dropdownBgHover" className="z-10 hidden w-48 bg-white rounded-lg shadow dark:bg-gray-700">
                    <ul className="p-3 space-y-1 text-sm text-gray-900 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
                        <li>
                            <div className="flex items-center p-2 rounded">
                                <input id="checkbox-item-4" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-300 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label htmlFor="checkbox-item-4" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">This Week</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center p-2 rounded">
                                <input id="checkbox-item-4" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-300 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label htmlFor="checkbox-item-4" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">This Month</label>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center p-2 rounded">
                                <input id="checkbox-item-4" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-300 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label htmlFor="checkbox-item-4" className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">This Year</label>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className='mt-5 flex-row p-5 gap-2 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100'>
                    <div className='grid grid-cols-6 text-2xl p-2 '>
                        <div className='mx-auto'>Transaction ID</div>
                        <div className='mx-auto'>Date</div>
                        <div className='mx-auto'>Buyer</div>
                        <div className='mx-auto'>Seller</div>
                        <div className='mx-auto'>Product Name</div>
                        <div className='mx-auto'>Amount</div>
                    </div>

                    <hr className='h-1 my-4 bg-gray-900 dark:bg-gray-100' />

                    <div className='grid row-auto gap-1 text-xl p-2'>
                        <Transaction product={transaction.product} amount={transaction.amount} buyer={transaction.buyer} seller={transaction.seller} id={transaction.id} date={transaction.date}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TransactionHistory

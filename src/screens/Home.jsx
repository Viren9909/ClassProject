import React from 'react'
import Sidebar from '../components/Sidebar'

const Home = () => {

    const transaction = {
        id: 1,
        date: '2024-11-20',
        type: 'purchase',
        counterparty: 'John Doe',
        amount: 100.00,
    };

    return (
        <div className=''>
            <div className='bg-gray-200 dark:bg-gray-900'>
                <Sidebar />
            </div>
        </div>
    )
}

export default Home

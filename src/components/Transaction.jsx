import React from 'react'
import '../style/Transaction.css'

const Transaction = (props) => {
    const { amount, date, product, seller, buyer, id } = props;
    return (
        <div className='my-2'>
            <div className='row-item'>
                <div className='center-item'>{id}</div>
                <div className='center-item'>{date}</div>
                <div className='center-item'>{buyer}</div>
                <div className='center-item'>{seller}</div>
                <div className='center-item'>{product}</div>
                <div className={`center-item ${buyer.toLowerCase() === 'you' ? 'text-red-500':'text-green-500'}`}>{buyer.toLowerCase() === 'you' ? '-':'+'} ${amount}</div>
            </div>
        </div>
    )
}

export default Transaction

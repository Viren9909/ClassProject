import React from 'react'
import ItemBox from './ItemBox'

const ItemGrid = () => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-3">
            <div>
                <ItemBox />
            </div>
            <div>
                <ItemBox />
            </div>
            <div>
                <ItemBox />
            </div>
            <div>
                <ItemBox />
            </div>
            <div>
                <ItemBox />
            </div>
            <div>
                <ItemBox />
            </div>
            <div>
                <ItemBox />
            </div>
        </div>
    )
}
export default ItemGrid

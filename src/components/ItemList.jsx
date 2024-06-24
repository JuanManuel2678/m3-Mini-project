import React from 'react'

export default function ItemList({children}) {

    return (
        <ul className="item_list">
            {children}
        </ul>
    )
}
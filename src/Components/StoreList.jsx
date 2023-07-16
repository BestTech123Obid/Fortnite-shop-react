import React, { useState } from 'react'
import StoreItem from "./StoreItem"
export const StoreList = ({data,openGoods, goods,addGood}) => {
    
   
   

    return (
       
        <div className='storeList'>
            <div className="cart" onClick={openGoods}>
            <i className="material-icons cart-icon">add_shopping_cart</i> 
            <span>{goods.length}</span>
            </div>
           
        {data?.map(item => (
            <StoreItem key={item.id} {...item} addGood={addGood} />
        ))}
        </div>
    )
}

export default StoreList

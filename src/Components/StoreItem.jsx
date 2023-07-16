import React from 'react'

 const StoreItem=({image,id,name,description,price, addGood}) => {
 
    return (
      <div className='storeItem'>
        <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src={image}/>
    </div>
    <div className="card-content ">
      <span >{name}</span>
      <p className='color'>{price}$</p>
     <a className='waves-effect waves-light btn' onClick={()=>{
      
      const good = {
        id,
        name,
        price,
        quantity:1
      }
      addGood(good)
     
     }}>Buy</a>
        
    </div>
    
  </div>
      </div>  
        
        
    )
}

export default StoreItem

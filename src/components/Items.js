import React, {useContext} from 'react'
import {CartContext} from "./Cart";

const Items = ({id,description, title, img, price, quantity}) => {

  const {removeItem, increment, decrement} = useContext(CartContext)

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="" />
        </div>
        <div className="title">
          <h2>{title}</h2>
          <h4>{description}</h4>
        </div>
        <div className="add-minus-quantity">
          <i className="uil uil-minus minus" onClick={()=>decrement(id)}></i>
          <input type="text" placeholder={quantity} />
          <i className="uil uil-plus add" onClick={()=>increment(id)}></i>
        </div>

        <div className="price">
          <h3>{price}</h3>
        </div>
                            
        <div className="remove-item">
          <i className="uil uil-trash-alt remove" onClick={()=>removeItem(id)}></i>
        </div>


      </div>

        <hr />
      
    </>
  )
}

export default Items

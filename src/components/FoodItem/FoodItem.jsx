import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({id,name,price,descrption,image}) => {
const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt="" />
        {
          !cartItems[id]
          ?<img src={assets.add_icon_white} className="add" onClick={()=>addToCart(id)}/>
          :<div className="food-item-counter">
            <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)}/>
            <p>{cartItems[id]}</p>
            <img src={assets.add_icon_green} alt="" onClick={()=>addToCart(id)}/>
          </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{descrption}</p>
        <p className="food-item-price">${price}</p>
      </div>
      
    </div>
  )
}

export default FoodItem

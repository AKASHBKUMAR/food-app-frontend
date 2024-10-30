import { useContext } from "react";
import "./PlaceOrder.css";
import {StoreContext} from "../../context/StoreContext";

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input placeholder="First Name" type="text" />
          <input placeholder="Last Name" type="text" />
        </div>
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input placeholder="City" type="text" />
          <input placeholder="State" type="text" />
        </div>
        <div className="multi-fields">
          <input placeholder="Zip Code" type="text" />
          <input placeholder="Country" type="text" />
        </div>
        <input type="text" placeholder="phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>
                ${getTotalCartAmount()}
              </p>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder

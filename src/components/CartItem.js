import React, { useContext } from "react";

import { AppContext } from "../AppContext";


function CartItem({ item }) {
    const { removeCartItem } = useContext(AppContext)
    return (
        <div className="cart-item">
            <i className="ri-delete-bin-line" onClick={() => removeCartItem(item.id)}></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem;
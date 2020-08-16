import React, { useContext, useState } from "react";

import { AppContext } from "../AppContext";
import CartItem from "../components/CartItem";


function Cart() {
    const { cartItems, setCartItems, totalCost } = useContext(AppContext);
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    const [isOrdering, setIsOrdering] = useState(false);

    function placeOrder() {
        setIsOrdering(true);
        setTimeout(() => {
            // Simulate order network calls
            setCartItems([]); // empty cart
            setIsOrdering(false);
        }, 3000)
    }

    const orderDisable = cartItems.length === 0
    console.log(orderDisable)

    return (
        <main className="cart-page" >
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost" > Total: {totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })
            }</p>
            <div className="order-button">
                <button disabled={orderDisable} onClick={placeOrder}>{isOrdering ? "Ordering..." : "Place Order"}</button>
            </div>
            {orderDisable && <p>You have no items in your cart.</p>}
        </main >
    )
}

export default Cart;
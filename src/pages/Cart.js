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

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
            <div className="order-button">
                <button onClick={placeOrder}>{isOrdering ? "Ordering..." : "Place Order"}</button>
            </div>
        </main>
    )
}

export default Cart;
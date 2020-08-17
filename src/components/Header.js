import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";

function Header() {
    const { cartItems } = useContext(AppContext)

    function cartIcon() {
        if (cartItems.length > 0) {
            return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
        } else if (cartItems.length === 0) {
            return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
        }
    }

    return (
        <header>
            <Link to='/picsomereact'>
                <h2>Pic Some</h2>
            </Link>
            <Link to='/cart'>
                {cartIcon()}
            </Link>
        </header>
    )
}

export default Header;
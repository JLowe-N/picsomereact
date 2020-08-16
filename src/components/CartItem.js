import React, { useContext, useState } from "react";
import PropTypes from "prop-types"
import { AppContext } from "../AppContext";


function CartItem({ item }) {
    const { removeCartItem } = useContext(AppContext);
    const [hovered, setHovered] = useState(false);
    const trashDisplay = `ri-delete-bin-${hovered ? "fill" : "line"}`
    console.log(hovered)
    return (
        <div className="cart-item">
            <i
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={trashDisplay}
                onClick={() => removeCartItem(item.id)}
            ></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired
    })
}

export default CartItem;
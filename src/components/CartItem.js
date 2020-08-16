import React, { useContext } from "react";
import PropTypes from "prop-types"
import { AppContext } from "../AppContext";
import useHover from "../hooks/useHover";


function CartItem({ item }) {
    const { removeCartItem } = useContext(AppContext);
    const [hovered, ref] = useHover();

    const trashDisplay = `ri-delete-bin-${hovered ? "fill" : "line"}`

    return (
        <div className="cart-item">
            <i
                ref={ref}
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
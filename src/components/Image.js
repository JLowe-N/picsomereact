import React, { useState, useContext } from "react";
import { AppContext } from "../AppContext"
import PropTypes from "prop-types"

function Image({ imgObj, className }) {
    const [hovered, setHovered] = useState(false);
    const { toggleFavorite, addCartItem, removeCartItem, cartItems } = useContext(AppContext)

    function isInCart() {
        const itemExists = cartItems.some(item => item.id === imgObj.id)
        return itemExists
    }

    function heartIcon() {
        if (imgObj.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(imgObj.id)}></i>
        } else if (hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(imgObj.id)}></i>
        }
    }

    function cartIcon() {
        if (isInCart()) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeCartItem(imgObj.id)}></i>
        } else if (hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addCartItem(imgObj)}></i>
        }
    }

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`${className} image-container`}
        >
            <img src={imgObj.url} className="image-grid" />
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

// Type Checking
Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
import React, { useState, useContext } from "react";
import { AppContext } from "../AppContext"
import PropTypes from "prop-types"

function Image({ imgObj, className }) {
    const [hovered, setHovered] = useState(false);
    const { toggleFavorite, addCartItem, cartItems } = useContext(AppContext)

    function isInCart() {
        const itemExists = cartItems.find(item => item.id === imgObj.id)
        console.log(itemExists)
        return itemExists
    }

    const heartIcon = (hovered && !imgObj.isFavorite) &&
        <i className="ri-heart-line favorite" onClick={() => toggleFavorite(imgObj.id)}></i>;
    const favIcon = imgObj.isFavorite &&
        <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(imgObj.id)}></i>

    const cartIcon = (hovered && !isInCart()) && <i className="ri-add-circle-line cart" onClick={() => addCartItem(imgObj)}></i>;
    const inCartIcon = isInCart() && <i className="ri-shopping-cart-fill cart"></i>

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`${className} image-container`}
        >
            <img src={imgObj.url} className="image-grid" />
            {heartIcon}
            {favIcon}
            {cartIcon}
            {inCartIcon}
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
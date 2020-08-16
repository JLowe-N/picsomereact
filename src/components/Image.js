import React, { useState, useContext } from "react";
import { AppContext } from "../AppContext"

function Image({ imgObj, className }) {
    const [hovered, setHovered] = useState(false);
    const { toggleFavorite } = useContext(AppContext)

    const heartIcon = (hovered && !imgObj.isFavorite) &&
        <i className="ri-heart-line favorite" onClick={() => toggleFavorite(imgObj.id)}></i>;
    const favIcon = imgObj.isFavorite &&
        <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(imgObj.id)}></i>

    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>;

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
        </div>
    )
}

export default Image
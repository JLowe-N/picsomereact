import React, { useState } from "react";

function Image({ imgObj, className }) {
    const [hovered, setHovered] = useState(false);

    const heartIcon = hovered && <i className="ri-heart-line favorite"></i>;
    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>;

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`${className} image-container`}
        >
            <img src={imgObj.url} className="image-grid" />
            {heartIcon}
            {cartIcon}
        </div>
    )
}

export default Image
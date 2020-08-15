import React, { useState } from "react";

function Image({ imgObj, className }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`${className} image-container`}
        >
            <img src={imgObj.url} className="image-grid" />
            {hovered &&
                <>
                    <i className="ri-heart-line favorite"></i>
                    <i className="ri-add-circle-line cart"></i>
                </>
            }
        </div>
    )
}

export default Image
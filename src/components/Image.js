import React from "react"

function Image({ img, className }) {
    return (
        <div className={`${className} image-container`}>
            <img src={img.url} className="image-grid" />
        </div>
    )
}

export default Image
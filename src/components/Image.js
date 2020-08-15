import React from "react"

function Image({ imgObj, className }) {
    return (
        <div className={`${className} image-container`}>
            <img src={imgObj.url} className="image-grid" />
        </div>
    )
}

export default Image
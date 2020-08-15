import React, { useContext } from "react";
import { AppContext } from "../AppContext"
import Image from "../components/Image"
import { getClass } from "../utils"

function Photos() {
    // Get the allPhotos array from context
    const { photos } = useContext(AppContext)
    const photoMap = photos.map((photo, index) => (
        <Image key={photo.id} img={photo} className={getClass(index)} />
    ))
    // map over it, creating <Image /> elements of the component we just made
    // <Image key={???} img={<full image object here>} className={getClass(<index of image>)} />
    return (
        <main className="photos">
            {photoMap}
        </main>
    )
}

export default Photos;
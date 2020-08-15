import React, { useState } from "react"

const Context = React.createContext();

function AppContextProvider({ children }) {
    const [photos, setPhotos] = useState([])

    return (
        <Context.Provider value={{ photos, setPhotos }}>
            {children}
        </Context.Provider>
    )
}

export { AppContextProvider, Context }
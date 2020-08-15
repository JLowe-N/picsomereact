import React, { useState, useEffect } from "react"

const Context = React.createContext();

function AppContextProvider({ children }) {
    const [photos, setPhotos] = useState([])

    const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const data = await response.json();
            setPhotos(data);
        }
        fetchData();
    }, []) // Fetch on mount only

    return (
        <Context.Provider value={{ photos, setPhotos }}>
            {children}
        </Context.Provider>
    )
}

export { AppContextProvider, Context }
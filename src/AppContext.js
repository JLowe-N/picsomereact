import React, { useState, useEffect } from "react"

const AppContext = React.createContext();

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
        <AppContext.Provider value={{ photos }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContextProvider, AppContext }
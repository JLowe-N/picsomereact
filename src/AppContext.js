import React, { useState, useEffect } from "react"

const AppContext = React.createContext();

function AppContextProvider({ children }) {
    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    // Image json does not have alt-text, consider for future update
    const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const data = await response.json();
            //setPhotos(data);
            return data;
        }
        fetchData()
            .then((data) => setPhotos(data));
    }, []) // Fetch on mount only

    function toggleFavorite(id) {
        const updatedArray = photos.map(photo => {
            if (photo.id === id) {
                console.log(id)
                console.log(!photo.isFavorite)
                return { ...photo, isFavorite: !photo.isFavorite }
            }
            return photo
        })
        setPhotos(() => updatedArray);
    }

    function addCartItem(img) {
        setCartItems(prevCart => ([...prevCart, img]))
    }

    function removeCartItem(id) {
        setCartItems(prevCart => prevCart.filter(item => item.id !== id))
    }

    return (
        <AppContext.Provider value={{ photos, toggleFavorite, addCartItem, removeCartItem, cartItems }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContextProvider, AppContext }
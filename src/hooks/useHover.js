import { useState, useRef, useEffect } from "react"

function useHover() {
    const [hovered, setHovered] = useState(false);
    const ref = useRef(null);

    function enter() {
        setHovered(true);
    }

    function leave() {
        setHovered(false);
    }

    useEffect(() => {
        const hoverRef = ref.current
        hoverRef.addEventListener("mouseenter", enter);
        hoverRef.addEventListener("mouseleave", leave);

        return () => {
            hoverRef.removeEventListener("mouseenter", enter);
            hoverRef.removeEventListener("mouseleave", leave);
        }
    }, [])

    return [hovered, ref]
}

export default useHover;
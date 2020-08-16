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
        ref.current.addEventListener("mouseenter", enter);
        ref.current.addEventListener("mouseleave", leave);

        return () => {
            ref.current.removeEventListener("mouseenter");
            ref.current.removeEventListener("mouseleave");
        }
    }, [])

    return [Hovered, ref]
}

export default useHover;
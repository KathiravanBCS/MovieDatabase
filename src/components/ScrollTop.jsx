import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, [pathname]); // Trigger effect when pathname changes
    return null; // This component doesn't render anything
};
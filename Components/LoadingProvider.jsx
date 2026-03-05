"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loading from "./Loading";

export default function LoadingProvider({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Hide loading screen after 2 seconds
        const hideTimer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(hideTimer);
    }, []);

    return (
        <>
            {isLoading && <Loading />}
            {!isLoading && children}
        </>
    );
}

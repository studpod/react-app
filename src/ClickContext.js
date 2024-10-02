import React, {  createContext, useState , useEffect } from "react";

    export const ClickContext = createContext();
    export const ClickProvider = ({ children }) => {
        const [clicks, setClicks] = useState(0);
    

    const incrementClicks = () => {
        setClicks(prevClicks => prevClicks + 1);
    };

        useEffect(() => { 
            const handleClick = () => {
                incrementClicks();
            };

            document.addEventListener('click' , handleClick);
            return () => {
                document.removeEventListener('click' , handleClick);
            };
        }, []);

        return (
            <ClickContext.Provider value={{ clicks }}>
                { children }
            </ClickContext.Provider>
        );
    };
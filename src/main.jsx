import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";
import Router from "./router/Router";
import { RouterProvider } from "react-router-dom";

export const ThemeContext = React.createContext();

function Main() {
    const [isDarkMode, setIsDarkMode] = useState(() => {

        const savedTheme = localStorage.getItem('isDarkMode');
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    useEffect(() => {
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            <RouterProvider router={Router} />
        </ThemeContext.Provider>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);



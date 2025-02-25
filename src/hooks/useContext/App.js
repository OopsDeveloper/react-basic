import React, { useContext, useState } from 'react';
import { createContext } from "react";

export const ThemeContext = createContext(null);
export const UserContext = createContext(null);

export default function App() {
    const [isDark, setIsDark] = useState(false);

    return (
        <UserContext.Provider value={"치로"}>
            <ThemeContext.Provider value={{ isDark, setIsDark }}>
                <Page />
            </ThemeContext.Provider>
        </UserContext.Provider>
    );
}


export function Page() {
    const data = useContext(ThemeContext);
    console.log(data);
    
    return (
        <div className='page'>
            <Header />
            <Context />
            <Footer />
        </div>
    );
}


export function Header() {
    const { isDark } = useContext(ThemeContext);
    const user = useContext(UserContext);
    return (
        <header 
            className='header'
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
                color: isDark ? 'white' : 'black',
            }}    
        >
            <h1>Welcome {user}!</h1>
        </header>
    );
}

export function Context() {
    const { isDark } = useContext(ThemeContext);
    const user = useContext(UserContext);
    return (
        <div
            className='content'
            style={{
                backgroundColor: isDark ? 'black' : 'white',
                color: isDark ? 'white' : 'black',
            }}  
        >
            <p>{user}님, 좋은 하루 되세요.</p>
        </div>
    );
}


export function Footer() {
    const { isDark, setIsDark } = useContext(ThemeContext);
    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <footer
            className='header'
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
            }} 
        >
            <button className='button' onClick={toggleTheme}>
                Dark Mode
            </button>
        </footer>
    );
}


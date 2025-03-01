import React, { useCallback, useEffect, useState } from 'react';

export default function App2() {
    const [size, setSizes] = useState(100);
    const [isDark, setIsDark] = useState(false);

    const createBoxStyle = useCallback(() => {
        return {
            backgroundColor: 'pink',
            width: `${size}px`,
            height: `${size}px`,
        };
    }, [size]);

    return (
        <div style={{
            background: isDark ? 'black' : 'white'
        }}
        >
            <input 
                type="number" 
                value={size}
                onChange={(e) => setSizes(e.target.value)}
            />
            <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
            <Box createBoxStyle={createBoxStyle} />
        </div>
    );
}

export function Box({ createBoxStyle }) {
    const [style, setStyle] = useState({});

    useEffect(() => {
        console.log('박스 키우기');
        setStyle(createBoxStyle());
    }, [createBoxStyle]);

    return (
        <div style={style}></div>
    );
}




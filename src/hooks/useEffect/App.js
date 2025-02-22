import React, { useState, useEffect } from 'react';

export default function App() {
    const [count, setCount] = useState(1);
    const [name, setName] = useState('');

    const handleCountUpdate = () => {
        setCount(count + 1);
    };

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    // 렌더링마다 매번 실행됨 - 렌더링 이후
    useEffect(() => {
        console.log('렌더링 ®');
    });

    // 맨처음 마운팅 될때만 실행.
    useEffect(() => {
        console.log('마운팅 ®');
    }, []);
    
    // 마운팅 + name이 변경될때마다 실행.
    useEffect(() => {
        console.log('name 변화 ®');
    }, [name]);


    return (
        <div>
            <button onClick={handleCountUpdate}>Update</button>
            <span>count: {count}</span>
            <input type="text" value={name} onChange={handleInputChange} />
            <span>name: {name}</span>
        </div>
    );
}


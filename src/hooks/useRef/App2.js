import React, { useRef, useState } from 'react';

export default function App() {
    const [renderer, setRenderer] = useState(0);
    const countRef = useRef(0);
    let countVar = 0;

    const doRendering = () => {
        setRenderer(renderer + 1);
    };
    
    const increaseCountRef = () => {
        countRef.current = countRef.current + 1;
        console.log('Ref: ', countRef.current);
    };
    
    const increaseCountVar = () => {
        countVar = countVar + 1;
        console.log('var: ', countVar);
    };

    const printResults = () => {
        console.log(`ref: ${countRef.current}, var: ${countVar}`);
        
    };

    return (
        <div>
            <p>Ref: {countRef.current}</p>
            <p>Var: {countVar}</p>
            <button onClick={doRendering}>렌더!</button>    
            <button onClick={increaseCountRef}>Ref 올려</button>    
            <button onClick={increaseCountVar}>Var 올려</button>
            <button onClick={printResults}>Ref Var 값 출력</button>
        </div>
    );
}


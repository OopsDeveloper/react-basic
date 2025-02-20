import React, { useState } from 'react';

const heavyWork = () => {
    console.log('엄청 무거운 작업!!!');
    return ['손끄니', '김욘세', '박팬더']
    
}

export default function App() {
    const [names, setNames] = useState(() => (heavyWork()));
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleUpload = () => {
        setNames((prev) => (
            [input, ...prev] 
        ));
    } 

    return (
        <div>
            <input type="text" value={input} onChange={handleInputChange}/>
            <button onClick={handleUpload}>Upload</button>
            {names.map((name, index) => (
                <p key={index}>{name}</p>
            ))};
        </div>
    );
}

// export default function App() {
//     const [time, setTime] = useState(1);

//     const handleClick = () => {
//         let newTime = 1;
//         newTime = time < 12 ? time + 1 : newTime;
//         setTime(newTime);
//     };
//     return (
//         <div>
//             <span>현재 시각: {time}시</span>
//             <button onClick={handleClick}>Update</button>
//         </div>
//     );
// }


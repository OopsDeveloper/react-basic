import React, { useReducer, useState } from 'react';
import personReducer from '../reducer/person-reducer';

export default function AppMentors() {
    // const [person, setPerson] = useState(initialPerson);
    const [person, dispatch] = useReducer(personReducer, initialPerson);

    const handleUpdate = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

        dispatch({ type: 'updated', prev, current });
        // setPerson((person) => ({
        //     ...person,
        //     mentors: person.mentors.map((mentor) => {
        //         return mentor.name === prev ? {...mentor, name: current} : mentor;
        //     }),
        // }))
    };

    const handleAdd = () => {
        const name = prompt(`멘토의 이름은?`);
        const title = prompt(`멘토의 직함은?`);
        dispatch({ type: 'added', name, title });
        // setPerson((person) => ({
        //     ...person,
        //     mentors: [...person.mentors, {name, title}]
        // }))
    };

    const handleDelete = () => {
        const name = prompt(`누구를 삭제하고 싶은가요?`);
        dispatch({ type: 'deleted', name });
        // setPerson((person) => ({
        //     ...person,
        //     mentors: person.mentors.filter((mentor) => {
        //       return mentor.name !== name
        //     }),
        // }))
    };

    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>
                {person.name}의 멘토는:
            </p>
            <ul>
                {person.mentors.map((mentor, index) => (
                    <li key={index}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>
            <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
            <button onClick={handleAdd}>멘토 추가</button>
            <button onClick={handleDelete}>멘토 삭제</button>
        </div>
    );
}

const initialPerson = {
    name: '치로',
    title: '개발자',
    mentors: [
        {
            name: '밥',
            title: '시니어개발자',
        },
        {
            name: '제임스',
            title: '시니어개발자',
        },
    ],
}

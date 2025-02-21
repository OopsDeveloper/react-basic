import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css'

export default function TodoList({ filter }) {
    //useState는 내부적으로 컴포넌트에 필요한 데이터를 기억하고 있다.
    //초기값 읽는 것을 방지하기 위해서는 콜백함수로 감싸준다.
    const [todos, setTodos] = useState(readTodosFromLocalStorage);
    //const [todos, setTodos] = useState(() => readTodosFromLocalStorage());와 같음
    
    const handleAdd = (todo) => {
        setTodos([...todos, todo]);
    }

    const handleUpdate = (updated) => {
        setTodos(todos.map(todo => todo.id === updated.id ? updated : todo));
    }

    const handleDelete = (deleted) => {
        setTodos(todos.filter(todo => todo.id !== deleted.id));
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const filtered = getFilteredItems(todos, filter);

    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                {filtered.map((item) => (
                    <Todo 
                        key={item.id} 
                        todo={item} 
                        onUpdate={handleUpdate} 
                        onDelete={handleDelete} 
                    />
                ))}
            </ul>
            <AddTodo onAdd={handleAdd} />
        </section>
    );
}

function readTodosFromLocalStorage() {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
    if(filter === 'all') {
        return todos;
    }
    return todos.filter((todo) => todo.status === filter);
}

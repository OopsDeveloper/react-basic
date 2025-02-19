import React, { useState } from 'react';

export default function AppForm() {
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    const [form, setForm] = useState({name: '', email: ''});
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        
    }
    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">이름:</label>
            <input 
                type="text" 
                name="name" 
                id="name" 
                value={form.name} 
                onChange={handleChange}
            />
            <label htmlFor="email">이메일</label>
            <input 
                type="email" 
                name="email" 
                id="email" 
                value={form.email}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    );
}


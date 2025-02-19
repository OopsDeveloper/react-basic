import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useQuery } from '@tanstack/react-query';

export default function QProducts() {
    const [checked, setChecked] = useState(false);
    const { 
        isLoading, 
        error, 
        data: products, 
    } = useQuery({
        queryKey: ['products', checked], 
        queryFn: async () => {
            console.log('fetching...');
            await new Promise((resolve) => setTimeout(resolve, 2000)); // ⏳ 2초 딜레이 추가
            return fetch(`/data/${checked ? 'sale_' : ''}products.json`).then((res) => res.json());
        },
        staleTime: 1000 * 60 * 5,
    });

    // const [loading, error, products] = useProducts({ salesOnly: checked });
    const handleChange = () => setChecked((prev) => !prev);

    if(isLoading) return <p>Loading...</p>;
    
    if(error) return <p>{error}</p>
    
    return (
        <>
            <input 
                type="checkbox" 
                checked={checked} 
                onChange={handleChange} 
            />
            <label htmlFor="checkbox">Show Only 🔥 Sale</label>
            <ul>
                {products.map((product) => (
                    <li key={uuidv4()}>
                        <article>
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </>
    );
}


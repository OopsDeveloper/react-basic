import React, { useState } from 'react';
import QProducts from './QProducts';
import { useQueryClient } from '@tanstack/react-query';

export default function MainProducts() {
  const [showLeftProducts, setShowLeftProducts] = useState(true);
  const [showRightProducts, setShowRightProducts] = useState(true);
  const client = useQueryClient();
  return (
    <main className='container'>
      <div>
        {showLeftProducts && <QProducts />}
        <button onClick={() => setShowLeftProducts((show) => !show)}>
          Toggle
        </button>
      </div>
      <div>
        {showRightProducts && <QProducts />}
        <button onClick={() => setShowRightProducts((show) => !show)}>
          Toggle
        </button>
      </div>
      <button onClick={async () => {
          await client.invalidateQueries({ queryKey: ['products', false] });
          // await client.refetchQueries({ queryKey: ['products', false] });
      }}>
        정보가 업데이트 되었음!
      </button>
    </main>
  );
}

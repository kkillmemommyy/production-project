import { useState } from 'react';
import cls from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>{count}</h1>
      <div>
        <button className={cls.btn} onClick={decrement}>
          decrement
        </button>
        <button className={cls.btn} onClick={increment}>
          increment
        </button>
      </div>
    </div>
  );
};

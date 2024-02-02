import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
    const {count} = useSelector((state) => state.counter)
    return (
        <div>
          <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>Increment</button>
          <div>
            <h1>{count}</h1>
          </div>
          <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>Decrement</button>  
        </div>
    );
};

export default Counter;
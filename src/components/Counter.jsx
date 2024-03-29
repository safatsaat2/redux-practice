import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, decrementByValue, increment, incrementByValue } from '../redux/features/counter/counterSlice';

const Counter = () => {
    const {count} = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div>
          <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={() => dispatch(increment())}>Increment</button>
          <div>
            <h1>{
                count <= 0 ? "less than 0" : count
                }</h1>
          </div>
          <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={() => dispatch(decrement())}>Decrement</button>
          <br />
          <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={() => dispatch(incrementByValue(5))}> Increment By 5</button>  
          <div>
            <h1>{
                count <= 0 ? "less than 0" : count
                }</h1>
          </div>
          <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={() => dispatch(decrementByValue(5))}> Decrement By 5</button>  
        </div>
    );
};

export default Counter;
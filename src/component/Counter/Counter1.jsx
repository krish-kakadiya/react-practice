import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const count = useSelector((state)=>state.count);
    const dispatch = useDispatch();
    useEffect(() => {
    console.log("Component Mounted");

    return () => { 
      console.log("Component Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Count Updated:", count);
  }, [count]);
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={()=>dispatch({type:'INCREMENT'})}>++</button>
        <button onClick={()=>dispatch({type:'DECREMENT'})}>--</button>
    </div>
  )
}

export default Counter;
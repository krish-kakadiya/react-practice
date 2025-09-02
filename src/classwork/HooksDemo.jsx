import React, { useEffect, useState } from 'react'

const HooksDemo = () => {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("use effect loaded")
    },[count])
  return (
    <>
    <h1>count - {count}</h1>
    <input onClick={()=>setCount(count+1)}type="button" value={"+"}/>
    </>
  )
}

export default HooksDemo;
import React, { useState } from 'react'

const Form = () => {
    let [name,setName]=useState("");
    function handleSubmit(e)
    {
        e.preventDefault();
        alert(`your name is ${name}`);
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name:
            <input type="text" id='name' 
            value={name}
            onChange={(e)=>setName(e.target.value)}/>
        </label>
        <input type="submit" value="submit "/>
    </form>
    </> 
  )
}

export default Form
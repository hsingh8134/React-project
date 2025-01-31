import React, { useState } from 'react'

function Counter1() {
   
    const [count,setCount]=useState(0);
 
    return (
    <div>

     <h1 className='m-2 p-2 font-bold border w-50 '>{count}</h1>

     <button onClick={()=>{
        setCount(count+1)
      }} className='m-2 p-2 font-bold  bg-blue-500 border' > increment</button>

    <button onClick={()=>{
        setCount(count-1)
     }} className='m-2 p-2 font-bold  bg-blue-500 border'> decrement</button>
    
    </div>
  )
}

export default Counter1
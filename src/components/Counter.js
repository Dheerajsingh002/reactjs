
import React, { useState } from 'react'


function Counter() {
    // let [count,setCount]=useState(0);
    // function UpdateCounter(){
    //     setCount(count+1);
    
    //     console.log(count);
    // }
    // function DeleteCounter(){
    //     setCount(count-1);
    
    //     console.log(count);
    // }
    let [fruits,setFruit]=useState("Apple");
  return (
    <div>
        <p>Fruits:{fruits}</p>
        <button onClick={()=>setFruit("papaya")}>papaya</button>
        <button onClick={()=>setFruit("Mango")}>Mango</button>
        <button onClick={()=>setFruit("KAILA")}>KAILA</button>
        {/* <p>The counter Value Increm,ent By 1 :{count}</p>
        <button onClick={UpdateCounter}>Increment</button>
        <button onClick={DeleteCounter}>Increment</button> */}
      
    </div>
  )
}

export default Counter

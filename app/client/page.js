'use client';
import React, { useState } from "react";


const Client = () => {
    console.log("Clientpage")//会出现在terminal中
    const [count, setCount] = useState(0)

    // const handleClick = () => {可以这么写
    //     setCount(count + 1);
    // };

    return (
        <div>
            <h1 className='text-7xl font-bold mb-4'>{count}</h1>
            <button className="btn but-primary" onClick={() => setCount(count+1)}>Increase</button>
          
        </div>
    );
}

export default Client;
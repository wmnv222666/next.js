'use client';
import React, { useState } from "react";


const Client = () => {
    const [count, setCount] = useState(0)

    // const handleClick = () => {可以这么写
    //     setCount(count + 1);
    // };

    return (
        <div>
            <h1 className='text-7xl font-bold mb-4'>{count}</h1>
            <button className="btn but-primary" onClick={() => setCount(count+1)}>Increase</button>
            {/* <Link href='/'>
                Home Page
            </Link> */}
        </div>
    );
}

export default Client;
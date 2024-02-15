// import React from 'react'

const Drinkslayout = ({ children }) => {
    return (

        <div className='max-w-xl'>
            {/* {children} 如果在这里就变成了在上面*/}
            <div className='mockup-code mb-8'>
                <pre data-prefix="$">
                    <code>npx create----</code>
                </pre>
            </div>
            {children}
        </div>
    );
};

export default Drinkslayout;

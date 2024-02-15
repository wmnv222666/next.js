// import React, { useEffect } from "react";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

const fetchDrinks = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Failed to fetch drinks')
    }
    const data = await response.json();
    // console.log(data, "data");这个打印出现在VScode   terminal里 记住  因为这个是服务端而不是客户端·
    return data
};

const DrinksPage = async () => {
    const data = await fetchDrinks()//这里经常使用useEffect  hook然后在里面打印data
    // console.log(data, "data");

    return (
        <div>
            <h1 className='text-7xl'>Drinks Page</h1>
        </div>
    );
};

export default DrinksPage;




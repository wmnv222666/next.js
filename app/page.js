import React from 'react';
import Link from 'next/link';

const HomePage = () => {
   console.log(HomePage)//启动时就出现在vscode的terminal中 而不是出现在页面的控制台中
  return (
    <div>
      <h1 className='text-5xl mb-8 font-bold'>Next.JS</h1>
      <Link href='/client' className='btn btn-accent'>Get start</Link>
    </div>
  );
};

export default HomePage;
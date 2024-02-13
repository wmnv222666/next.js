import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1 className='text-5xl mb-8 font-bold'>Next.JS</h1>
      <Link href='/client' className='btn btn-accent'>Get start</Link>
    </div>
  );
};

export default HomePage;
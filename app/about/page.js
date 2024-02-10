import React from 'react';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div>
      <h1 className='text-7xl'>About Page</h1>
      <Link href='/'>
        Home Page
      </Link>
    </div>
  );
}

export default AboutPage;

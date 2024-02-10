import Link from 'next/link';
import React from 'react'
const links = [
    { href: './client', label: 'cliend' },
    { href: './drinks', label: 'drinks' },
    { href: './query', label: 'query' },
    { href: './tasks', label: 'tasks' },
    // { href: './prisma-example', label: 'prisma-example' },



];
//rafce
//https://daisyui.com/docs/colors/
const Navbar = () => {
  return (
      <nav className='bg-base-300 py-4'>This is navbar</nav>
  )
}

export default Navbar
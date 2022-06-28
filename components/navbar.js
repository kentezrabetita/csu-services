import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className='container mx-auto flex flex-row justify-between items-center p-4 md:p-6 font-bold xl:px-32 min-w-fit'>
        <div className='flex flex-row items-center space-x-4'>
          <Image src='/csu.png' width={50} height={50} alt='csu icon' />
          <Link href='/'>
            <a className='hover:text-green-500 transition'>Open Services</a>
          </Link>
        </div>
        <div className='hidden md:flex flex-row space-x-10 items-center'>
          <div>
            <Link href='/'>
              <a>About</a>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <a>Blogs</a>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <a>Services</a>
            </Link>
          </div>
          <div>
            <Link href='/'>
              <a>Contact</a>
            </Link>
          </div>
        </div>
        <div className='hidden md:flex flex-row space-x-6 items-center'>
          <div>
            <button className='p-2 px-8 bg-green-700 text-white rounded-lg hover:scale-105 transition-all ease-in-out'>
              Login
            </button>
          </div>
        </div>
        <div className='md:hidden'>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className='p-2 px-4 bg-green-700 text-white rounded-lg'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </nav>
      {showMenu && (
        <div className='fixed top-0 flex bg-white flex-col items-center self-end justify-center py-8 space-y-2 text-black h-[100vh] left-0 right-0 font-bold'>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className='p-2 px-4 bg-green-700 text-white rounded-full absolute top-5 right-4'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              stroke-width='2'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
          <Link href='/about'>
            <a className='hover:bg-green-700 hover:text-white transition-all ease-in-out p-2 rounded-lg'>
              About
            </a>
          </Link>
          <Link href='/'>
            <a className='hover:bg-green-700 hover:text-white transition-all ease-in-out p-2 rounded-lg'>
              Blogs
            </a>
          </Link>
          <Link href='/'>
            <a className='hover:bg-green-700 hover:text-white transition-all ease-in-out p-2 rounded-lg'>
              Services
            </a>
          </Link>
          <Link href='/'>
            <a className='hover:bg-green-700 hover:text-white transition-all ease-in-out p-2 rounded-lg'>
              Contact
            </a>
          </Link>
          <Link href='/'>
            <a className='hover:bg-green-700 hover:text-white transition-all ease-in-out p-2 rounded-lg'>
              Login
            </a>
          </Link>
        </div>
      )}
    </>
  );
}

import Link from 'next/link'
import Head from 'next/head'
import IconLinks from './iconlinks.js'
import { siteTitle } from './layout.js'
import { useState } from 'react'

export default function Header() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
      setActive(!active);
  };

  return (
      <>
        <Head>
          <script defer src="https://kit.fontawesome.com/7d1c7e7747.js"></script>
        </Head>
        <nav className='flex items-center flex-wrap bg-white-400 text-yellow-400 px-3 py-2'>
          <Link href='/'>
            <a className='px-1 py-2 inline-flex items-center p-2 mr-4'>
              <i aria-hidden className="pr-2 fas fa-angle-double-right text-lg leading-lg text-yellow-400 opacity-75"></i>
              <span className='text-xl font-semibold tracking-wide'>
                Linnéa olofsson
              </span>
            </a>
          </Link>
          <button
            className=' inline-flex p-3 lg:hidden rounded ml-auto hover:opacity-90 outline-none'
            onClick={handleClick}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
          {/*Note that in this div uses a ternary operator to decide whether or not to display the content of the div  */}
          <div className={`${
              active ? '' : 'hidden'
              } w-full lg:inline-flex lg:flex-grow lg:w-auto`}
          >
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
              <Link href='/'>
                <a className='transition duration-500 ease-in-out lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center transform hover:-translate-y-1 hover:scale-110'>
                Home
                </a>
              </Link>
              <Link href='/about'>
                <a className='transition duration-500 ease-in-out lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center transform hover:-translate-y-1 hover:scale-110'>
                About
                </a>
              </Link>
              <Link href='/contact'>
                <a className='transition duration-500 ease-in-out lg:inline-flex lg:w-auto w-full px-3 py-2 font-bold items-center justify-center transform hover:-translate-y-1 hover:scale-110'>
                Contact
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </>
  )
}

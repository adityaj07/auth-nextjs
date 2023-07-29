import { FC } from 'react'
import Link from 'next/link'

interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header className="text-black bg-white body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-10 h-10 text-white p-2 bg-black rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="ml-3 text-xl">AuthNext</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-gray-700 transition-colors duration-150 cursor-pointer">Home</a>
        <a className="mr-5 hover:text-gray-700 transition-colors duration-150 cursor-pointer">About</a>
        <a className="mr-5 hover:text-gray-700 transition-colors duration-150 cursor-pointer">Features</a>
        <a className="mr-5 hover:text-gray-700 transition-colors duration-150 cursor-pointer">Contact</a>
      </nav>
      <Link href="/signup"><button className="inline-flex items-center bg-black border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-white transition-colors duration-150">
        Signup
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button></Link>
      <Link href="/login"><button className="inline-flex items-center bg-black border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-white transition-colors duration-150 ml-4">
        Login
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button></Link>
    </div>
  </header>)
}

export default Navbar
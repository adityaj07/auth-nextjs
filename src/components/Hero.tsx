import { FC } from 'react'
import logo from "@/app/assets/2.png"
import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  
}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section className="text-black bg-white body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-5xl mb-4 font-medium text-black">
          Learning Nextjs &
          <br className="hidden lg:inline-block" />
          Authentication is fun
        </h1>
        <p className="mb-8 leading-relaxed">
          I have no idea what i should write in here, so I am just writing some text, because lorem ipsum looks a bit too boring and people coming to my apple like website couldn't read that properly. <br />So there you go !
        </p>
        <div className="flex justify-center">
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
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
            src={logo}
            width={0}
            height={0}
            className="mx-auto w-[25rem] h-[25rem] rounded-lg"
            alt="Picture of the author"
          />
      </div>
    </div>
  </section>
  
    )
}

export default Hero
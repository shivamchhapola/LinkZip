"use client"
import DualBlobSvgAnimation from '@/components/SVG animations/DualBlobSvgAnimation';
import { SiGithub } from 'react-icons/si';
import { MdMenu } from 'react-icons/md';
import { useRef, useState } from 'react';
import Link from 'next/link';

export default function HeadSection() {
  const linkRef = useRef<HTMLInputElement>(null);
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const onShortLink = async () => {
    if (linkRef.current) {
      await fetch(`https://api.shrtco.de/v2/shorten?url=${linkRef.current.value}`).then(
        async (res) => {
          if (linkRef.current)
            linkRef.current.value = (await res.json()).result.full_short_link;
        });
    }
  }

  return (
    <header className='w-full h-screen flex flex-col justify-center items-center'>
      {/*Navigation bar*/}
      <nav className='w-full max-w-[110rem] h-12 flex items-center p-4 justify-between'>
        {/*Logo*/}
        <Link href="/" className='font-bold text-3xl cursor-go-big'>
          LinkZip
        </Link>

        {/*Menu for Desktop*/}
        <div className='hidden gap-8 sm:flex'>
          <Link href="#about" className='cursor-go-big hover:underline font-semibold'>
            About
          </Link>
          <Link href="/" className='cursor-go-big hover:underline font-semibold'>
            Dashboard
          </Link>
          <Link href="#contact" className='cursor-go-big hover:underline font-semibold'>
            Contact
          </Link>
          <Link href="/" className='cursor-go-big hover:underline font-semibold'>
            Login
          </Link>
          <Link href="/" className='cursor-go-big hover:underline font-semibold'>
            Sign up
          </Link>
          <Link href="/" className='cursor-go-big hover:underline font-semibold'>
            <SiGithub size="1.75rem" />
          </Link>
        </div>

        {/*Menu Button for Mobile*/}
        <button onClick={() => setSideBarOpen(true)} className='flex sm:hidden cursor-go-big w-8 h-8 rounded-md justify-center items-center'>
          <MdMenu size="1.75rem" />
        </button>
      </nav>

      <hr className='bg-black w-full h-[0.15rem]' />

      {/*Content*/}
      <div className='w-full h-[calc(100%-3rem)]'>
        {/*Background Animation*/}
        <div className='h-[90%] w-[90%] left-[5%] absolute z-0'>
          <DualBlobSvgAnimation bigScale={1.4} smallScale={1.1} bigColor='#FFDFC2' smallColor='#FFC2C2' />
        </div>
        <div className='w-full h-full flex flex-col justify-center items-center gap-4 z-[1] relative'>
          {/*Big Text*/}
          <div className='max-w-3xl text-4xl text-center font-bold cursor-go-big '>
            Effortless Sharing, Powerful Analytics
          </div>

          {/*Small Text*/}
          <div className='max-w-3xl text-center cursor-go-big  p-2'>
            Transform lengthy URLs into sleek, shareable links. But we don't stop there – gain valuable insights into link performance through comprehensive analytics.
          </div>

          {/*Link Shortener*/}
          <div className='h-10 rounded-full max-w-[30rem] w-[80%] flex outline mt-8'>
            <input type='text' ref={linkRef} placeholder='Paste your link here....' className='w-[85%] h-full pl-2 rounded-s-full cursor-go-big' />
            <button onClick={onShortLink} className='w-[15%] h-full text-xl font-semibold bg-black text-white rounded-e-full cursor-go-big hover:underline'>
              Zip
            </button>
          </div>

          {/*Call to action buttons*/}
          <div className='h-10 mt-6 flex gap-8'>
            <Link href="/" className='bg-black text-white flex items-center justify-center px-4 py-2 rounded-full font-semibold cursor-go-big hover:underline'>
              Sign up
            </Link>
            <Link href="/" className='flex items-center justify-center px-4 py-2 font-semibold hover:underline cursor-go-big'>
              Learn More
            </Link>
          </div>
        </div>
      </div>


      {/*Mobile Menu*/}
      <div className={`flex fixed w-screen h-screen z-[99] pointer-events-none bg-white
    ${sideBarOpen ? "bg-opacity-70" : "bg-opacity-0 delay-[0.5s]"} transition-all duration-[1s]`}>
        <div onClick={() => setSideBarOpen(false)} className={`w-1/3 transition-all duration-[1s] pointer-events-auto ${sideBarOpen ? "translate-x-0" : "translate-x-[100vw]"} transition-all duration-[0.5s] delay-[0.5s]`} />
        <div className={`flex-1 bg-white flex flex-col p-4 pr-8 gap-4 items-end
      ${sideBarOpen ? "translate-x-0" : "translate-x-[100vw]"} transition-all duration-[0.5s] delay-[0.5s] pointer-events-auto`}>
          <div className='flex flex-col w-full items-end'>
            <div className='font-bold text-3xl'>
              Menu
            </div>
            <hr className='bg-black w-full h-[0.15rem]' />
          </div>
          <Link href="/" className='cursor-go-big hover:underline font-semibold'>
            About
          </Link>
          <Link href="/" className='cursor-go-big hover:underline font-semibold'>
            Dashboard
          </Link>
          <Link href="/" className='cursor-go-big hover:underline font-semibold'>
            Contact
          </Link>
          <Link href="/" className='cursor-go-big hover:underline font-semibold'>
            Login
          </Link>
          <Link href="/" className='cursor-go-big hover:underline font-semibold'>
            Sign up
          </Link>
          <Link href="/" className='cursor-go-big hover:underline font-semibold absolute bottom-4 flex items-center gap-2 text-xs underline'>
            <SiGithub size="0.75rem" /> Repo
          </Link>
        </div>
      </div>
    </header>
  )
}

"use client"
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { PiEye, PiEyeClosed } from "react-icons/pi";

type Props = {}


export const metadata: Metadata = {
  title: 'LinkZip Signup',
  description: 'Signup page for LinkZip',
};

const SignupPage = (props: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const conRef = useRef<HTMLInputElement>(null);
  const [showPass, setShowPass] = useState(false);

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-slate-200">
      <div className="w-full max-w-[110rem] h-12 flex items-center p-8 justify-between absolute top-0 z-10">
        <Link href="/" className='font-bold text-3xl cursor-go-big text-white'>
          LinkZip
        </Link>
      </div>

      <div className="w-[90%] max-w-sm flex flex-col p-10 items-center gap-4 drop-shadow-md shadow-md bg-slate-100 z-10 rounded-lg">
        <span className="font-bold text-4xl mb-8 cursor-go-big">Welcome!</span>
        <input type='text' ref={nameRef} placeholder='Name' className='w-full h-10 pl-2 rounded-md outline outline-1 outline-slate-300' />
        <input type='text' ref={emailRef} placeholder='Email' className='w-full h-10 pl-2 rounded-md outline outline-1 outline-slate-300' />
        <div className="w-full h-10 relative">
          <input type={showPass ? "text" : "password"} ref={passRef} placeholder='Password' className='w-full h-full pl-2 rounded-md outline outline-1 outline-slate-300' />
          <button onClick={() => {
            setShowPass(!showPass);
          }} className="absolute h-full flex justify-center items-center top-0 right-2 cursor-go-big">
            {showPass ? <PiEyeClosed size="1.5rem" /> : <PiEye size="1.5rem" />}
          </button>
        </div>
        <input type={showPass ? "text" : "password"} ref={conRef} placeholder='Confirm Password' className='w-full h-10 pl-2 rounded-md outline outline-1 outline-slate-300 mb-6' />
        <button onClick={() => { }} className='w-full h-10 font-semibold bg-black text-white rounded-md cursor-go-big hover:underline'>
          Signup
        </button>
        <span className="text-sm">Already an account? <Link href="/login" className="text-blue-600 hover:underline cursor-go-big">Login</Link></span>
      </div>

      <div id="backgroundSVGs" className="absolute z-0 w-screen h-screen">
        <Image src="/bgsignupR.svg" alt="Background Right" height={500} width={500} className="absolute right-0 bottom-0" />
        <Image src="/bgsignupL.svg" alt="Background Left" height={500} width={500} className="absolute bottom-0 top-0" />
      </div>
    </main>
  )
}

export default SignupPage
"use client"
import CustomCursor from "@/components/others/CustomCursor";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { PiEye, PiEyeClosed } from "react-icons/pi";

type Props = {}

const LoginPage = (props: Props) => {
  const userRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    document.title = "LinkZip - Login";
  }, []);

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-slate-200">
      <div className="w-full max-w-[110rem] h-12 flex items-center p-8 justify-between absolute top-0 z-10">
        <Link href="/" className='font-bold text-3xl cursor-go-big'>
          LinkZip
        </Link>
      </div>

      <div className="w-4/5 max-w-sm flex flex-col p-10 items-center gap-4 drop-shadow-md shadow-md bg-slate-100 z-10 rounded-lg">
        <span className="font-bold text-4xl mb-8 cursor-go-big">Welcome Back 👋</span>
        <input type='text' ref={userRef} placeholder='Email' className='w-full h-10 pl-2 rounded-md outline outline-1 outline-slate-300' />
        <div className="w-full h-10 relative mb-6">
          <input type={showPass ? "text" : "password"} ref={passRef} placeholder='Password' className='w-full h-full pl-2 rounded-md outline outline-1 outline-slate-300' />
          <button onClick={() => {
            setShowPass(!showPass);
          }} className="absolute h-full flex justify-center items-center top-0 right-2 cursor-go-big">
            {showPass ? <PiEyeClosed size="1.5rem" /> : <PiEye size="1.5rem" />}
          </button>
          <Link href="/" className="absolute right-0 -bottom-5 text-xs text-blue-600 hover:underline cursor-go-big">Forgot Password?</Link>
        </div>
        <button onClick={() => { }} className='w-full h-10 font-semibold bg-black text-white rounded-md cursor-go-big hover:underline'>
          Login
        </button>
        <span className="text-sm">Don't have an account? <Link href="/signup" className="text-blue-600 hover:underline cursor-go-big">Create One</Link></span>
      </div>

      <div id="backgroundSVGs" className="absolute z-0 w-screen h-screen">
        <Image src="/bgloginR.svg" alt="Background Right" height={500} width={500} className="absolute right-0 top-0" />
        <Image src="/bgloginL.svg" alt="Background Left" height={500} width={500} className="absolute bottom-0 left-0" />
      </div>

      <CustomCursor color="#fff" size={28} />
    </main>
  )
}

export default LoginPage
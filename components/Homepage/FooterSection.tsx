import Link from 'next/link';
import { PiGithubLogoFill, PiInstagramLogoFill, PiLinkedinLogoFill, PiTwitterLogoFill } from 'react-icons/pi';

export default function FooterSection() {
  return (
    <footer className='w-full h-10 bg-slate-900 flex px-4 items-center justify-between'>
      <Link href="/" className='font-bold text-xl cursor-go-big text-white'>
        LinkZip
      </Link>
      <div className='text-white flex gap-4'>
        <Link href="https://www.instagram.com/shiv_chhapola" target="_blank" className='cursor-go-big'>
          <PiInstagramLogoFill size="1.5rem" />
        </Link>
        <Link href="https://www.twitter.com/shiv_chhapola" target="_blank" className='cursor-go-big'>
          <PiTwitterLogoFill size="1.5rem" />
        </Link>
        <Link href="https://www.github.com/shivamchhapola" target="_blank" className='cursor-go-big'>
          <PiGithubLogoFill size="1.5rem" />
        </Link>
        <Link href="https://www.linkedin.com/in/shivamchhapola" target="_blank" className='cursor-go-big'>
          <PiLinkedinLogoFill size="1.5rem" />
        </Link>
      </div>
    </footer>
  )
}

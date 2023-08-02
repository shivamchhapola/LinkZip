import DualBlobSvgAnimation from '@/components/SVG animations/DualBlobSvgAnimation';
import CustomCursor from '@/components/others/CustomCursor';
import { SiGithub } from 'react-icons/si';
import { MdMenu } from 'react-icons/md';

export default function Home() {
  return (
    <main className="flex w-screen h-screen flex-col bg-slate-200 cursor-none">
      <header className='w-full h-screen flex flex-col'>
        <nav className='w-full h-12 flex items-center p-4 justify-between'>
          <div className='font-bold text-3xl cursor-go-big'>LinkZip</div>
          <div className='hidden gap-8 sm:flex'>
            <button className='cursor-none cursor-go-big hover:underline font-semibold'>Home</button>
            <button className='cursor-none cursor-go-big hover:underline font-semibold'>Dashboard</button>
            <button className='cursor-none cursor-go-big hover:underline font-semibold'>Contact</button>
            <button className='cursor-none cursor-go-big hover:underline font-semibold'>Docs</button>
            <button className='cursor-none cursor-go-big hover:underline font-semibold'><SiGithub size="1.75rem" /></button>
          </div>
          <button className='flex sm:hidden cursor-go-big'>
            <MdMenu size="1.75rem" />
          </button>
        </nav>
        <hr className='bg-black w-full h-[0.15rem]' />
        <div className='w-full h-[calc(100%-3rem)]'>
          <div className='h-[90%] w-[90%] left-[5%] absolute z-0'>
            <DualBlobSvgAnimation bigScale={1.4} smallScale={1.1} bigColor='#FFDFC2' smallColor='#FFC2C2' />
          </div>
          <div className='w-full h-full flex flex-col justify-center items-center gap-12 z-[1] relative'>
            <div className='max-w-2xl text-4xl text-center font-bold cursor-go-big mix-blend-difference'>Effortless Sharing, Powerful Analytics</div>
            <div className='h-10 rounded-full max-w-[30rem] w-[80%] flex outline'>
              <input type='text' placeholder='Paste your link here....' className='w-[85%] h-full pl-2 rounded-s-full cursor-go-big' />
              <button className='w-[15%] h-full text-xl font-semibold bg-black text-white rounded-e-full cursor-go-big hover:underline'>Zip</button>
            </div>
          </div>
        </div>
      </header>
      <CustomCursor color="#fff" size={28} />
    </main>
  );
}

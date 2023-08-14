"use client"
import CustomCursor from '@/components/others/CustomCursor';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { MdOutlineDevices, MdQueryStats, MdSettings } from 'react-icons/md';
import { PiBinocularsBold } from 'react-icons/pi';
import { RxGlobe } from 'react-icons/rx';
import greetingTime from 'greeting-time';

type Props = {}

const DashboardPage = (props: Props) => {
  const [currentSelectedMenu, setCurrentSelectedMenu] = useState(1);

  useEffect(() => {
    document.title = "LinkZip - Dashboard";
  }, []);

  return (
    <main className='w-screen h-screen bg-slate-300 flex gap-0.5'>
      <div className='w-[25%] max-w-xs flex flex-col p-9 gap-6 bg-slate-200'>
        <Link href="/" className='font-bold text-4xl cursor-go-big mb-8'>
          LinkZip
        </Link>
        <MenuItem func={() => {
          currentSelectedMenu != 1 && setCurrentSelectedMenu(1);
        }} isSelected={currentSelectedMenu == 1} Icon={PiBinocularsBold} text='Overview' />
        <MenuItem func={() => {
          currentSelectedMenu != 2 && setCurrentSelectedMenu(2);
        }} isSelected={currentSelectedMenu == 2} Icon={RxGlobe} text='Location Data' />
        <MenuItem func={() => {
          currentSelectedMenu != 3 && setCurrentSelectedMenu(3);
        }} isSelected={currentSelectedMenu == 3} Icon={MdOutlineDevices} text='Device Data' />
        <MenuItem func={() => {
          currentSelectedMenu != 4 && setCurrentSelectedMenu(4);
        }} isSelected={currentSelectedMenu == 4} Icon={MdQueryStats} text='Performance' />
        <MenuItem func={() => {
          currentSelectedMenu != 5 && setCurrentSelectedMenu(5);
        }} isSelected={currentSelectedMenu == 5} Icon={MdSettings} text='Settings' />
      </div>
      <div className='flex-1 bg-slate-200 flex flex-col p-12 gap-6'>
        <span className='font-semibold text-4xl'>{greetingTime(new Date())}, Shivam</span>
      </div>

      <CustomCursor color="#fff" size={28} />
    </main>
  )
}

export default DashboardPage;


type MenuProps = {
  func: () => void;
  text: string;
  isSelected: boolean;
  Icon: IconType;
}

function MenuItem({ func, text, isSelected, Icon }: MenuProps) {
  return (
    <button onClick={func} className={`text-lg flex items-center gap-2 p-3 rounded-md transition-colors duration-300 cursor-go-big ${isSelected ? "bg-black text-white" : "hover:bg-slate-300"}`}>
      <Icon size="1.5rem" /> {text}
    </button>
  );
}
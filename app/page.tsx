"use client"
import ContentSection from '@/components/Homepage/ContentSection';
import FooterSection from '@/components/Homepage/FooterSection';
import HeadSection from '@/components/Homepage/HeadSection';
import CustomCursor from '@/components/others/CustomCursor';

export default function Home() {

  return (
    <main className="flex max-w-screen flex-col bg-slate-200 cursor-none scroll-smooth">
      <HeadSection />
      <hr className='bg-black w-full h-[0.15rem]' />
      <ContentSection />
      <FooterSection />
      <CustomCursor color="#fff" size={28} />
    </main>
  );
}

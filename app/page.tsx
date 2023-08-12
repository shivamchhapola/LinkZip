"use client"
import ContactSection from '@/components/Homepage/ContactSection';
import ContentSection from '@/components/Homepage/ContentSection';
import FooterSection from '@/components/Homepage/FooterSection';
import HeadSection from '@/components/Homepage/HeadSection';

export default function Home() {

  return (
    <main className="flex w-screen flex-col bg-slate-200 scroll-smooth">
      <HeadSection />
      <hr className='bg-black w-full h-[0.15rem]' />
      <ContentSection />
      <hr className='bg-black w-full h-[0.15rem]' />
      <ContactSection />
      <FooterSection />
    </main>
  );
}

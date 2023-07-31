import CustomCursor from '@/components/others/CustomCursor';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 cursor-none">
      <div className="cursor-go-big w-[20rem] h-[20rem] bg-white justify-center items-center flex">
        <h1 className="font-extrabold text-5xl text-black">Bruh</h1>
      </div>
      <CustomCursor color="#fff" size={28} />
    </main>
  );
}

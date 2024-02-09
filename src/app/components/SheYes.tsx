import Image from 'next/image';

export default function SheYes() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen space-y-10">
        <Image src={'/kiss.gif'} width={300} height={300} className="w-64 lg:w-80 h-auto" alt="bear" />
        <p className="text-3xl font-medium">Oke Yeyy !!!</p>
      </div>
    </div>
  );
}

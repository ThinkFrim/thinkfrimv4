import LogoNavbar from '@/public/assets/logo/Logo.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center gap-10'>
      <Image
        src={LogoNavbar}
        width={200}
        height={200}
        alt='thinkfrim.svg'
        quality={100}
      />
      <h1 className='text-2xl'>Coming Soon</h1>
    </main>
  );
}

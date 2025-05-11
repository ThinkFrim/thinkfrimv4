import React from 'react';
import LogoNavbar from '@/public/assets/logo/Logo.svg';
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-2 mx-2'>
      <div>
        <Image src={LogoNavbar} alt='thinkfrim.svg' quality={100} />
      </div>
      <div className='space-x-4 text-lg font-light'>
        <Link href='/'>Home</Link>
        <Link href='/'>about</Link>
        <Link href='/'>Works</Link>
        <Link href='/'>Service</Link>
      </div>
    </div>
  );
};

export default Navbar;

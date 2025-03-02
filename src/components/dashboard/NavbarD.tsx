import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import avatar from '@/assets/avatar.png';   

function NavbarD() {
  return (
    <>
      <div className='h-10 flex justify-between items-center px-10 my-2'>
        <Image src={logo} alt='logo' width={60} height={60} />
        <div className='flex items-center space-x-10 px-4'>
            <p className='font-mono text-sm'>remaining credits</p>
            <Image src={avatar} alt='logo' width={40} height={40} />
        </div>
      </div>
      <hr className="border-t w-full" /> 
    </>
  );
}

export default NavbarD;

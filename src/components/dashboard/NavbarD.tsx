import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';
import avatar from '@/assets/avatar.png';   

function NavbarD() {
  return (
    <>
      <div className='h-10 flex justify-between items-center px-10 my-6'>
        <Image src={logo} alt='logo' width={80} height={80} />
        <div className='flex items-center space-x-10 px-4'>
            <p>remaining credits</p>
            <Image src={avatar} alt='logo' width={50} height={50} />

        </div>
      </div>
      <hr className="border-t border-gray-900 w-full" /> {/* Horizontal line */}
    </>
  );
}

export default NavbarD;

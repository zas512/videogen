import React from 'react'
import Image from 'next/image';
import RightIcon from "@/assets/RightIcon.png";

function Page() {
  return (
    <>
      <div>
        <p className="mb-4 font-mono text-5xl font-bold w-[50%] ">
          <span className="gradient-text">Flexible Options</span>
          That Match Your <span className="gradient-text">Budget</span>
        </p>
        <div className='flex justify-center items-center gap-10 pt-10 ' >
          {/* Starter Plan */}
          <div className=' h-[60vh] rounded-xl px-4 pt-4 border-1 border-[#000099]'>
            <p className="font-black text-2xl font-mono">Starter plan</p>
            <p className='font-mono text-lg'>Best for trying</p>

            <div className='mt-8'>
              <ul className="list-disc list-inside font-mono text-sm">
                <li>2 Free Videos Per Month</li>
                <li>Access to Basic Video Templates</li>
                <li>Standard Resolution Output</li>
                <li>Community Support</li>
              </ul>
            </div>

            <p className='text-center font-mono text-4xl mt-10 font-black'>$0/month</p>
            <div className='flex justify-center items-center mt-4'>
              <div className='w-32 h-12 rounded-full bg-[#000099] text-white font-mono text-lg flex justify-center items-center mt-10 px-2 gap-x-2'>
                <p className='text-sm'>Try for free</p>
                <Image src={RightIcon} alt='arrow' width={20} height={20} />
              </div>

            </div>
          </div>

          {/* Additional Plans (Placeholder) */}
          <div className='h-[60vh]  rounded-xl px-4 pt-4 border-1 border-[#000099]'>
            <p className="font-black text-2xl font-mono">Pro plan</p>
            <p className='font-mono text-lg'>For Growing Creators</p>

            <div className='mt-8'>
              <ul className="list-disc list-inside font-mono text-sm">
                <li>200 Video Credits per Month</li>
                <li>Premium Video Templates</li>
                <li>High-Resolution Output</li>
                <li>Priority Email Support</li>
              </ul>
            </div>

            <p className='text-center font-mono text-4xl mt-10 font-black'>$19/month</p>
            <div className='flex justify-center items-center mt-4'>
              <div className='w-32 h-12 rounded-full bg-[#000099] text-white font-mono text-lg flex justify-center items-center mt-10 px-2 gap-x-2'>
                <p className='text-sm'>Get now</p>
              </div>

            </div>
          </div>
          <div className='h-[60vh] rounded-xl px-4 pt-4 border-1 border-[#000099]'>
            <p className="font-black text-2xl font-mono">Business Plan</p>
            <p className='font-mono text-lg'>Best for Bussinesses</p>

            <div className='mt-8'>
              <ul className="list-disc list-inside font-mono text-sm">
                <li>500 Video Credits per Month</li>
                <li>Customizable Templates</li>
                <li>Full HD Resolution Output</li>
                <li>Dedicated Support Manager</li>
              </ul>
            </div>

            <p className='text-center font-mono text-4xl mt-10 font-black'>$49/month</p>
            <div className='flex justify-center items-center mt-4'>
              <div className='w-32 h-12 rounded-full bg-[#000099] text-white font-mono text-lg flex justify-center items-center mt-10 px-2 gap-x-2'>
                <p className='text-sm'>Get now</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;

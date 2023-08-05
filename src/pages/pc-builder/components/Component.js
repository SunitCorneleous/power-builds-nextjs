import PrimaryButton from '@/components/UI/PrimaryButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Component = ({ icon, title, query }) => {
  return (
    <div className='bg-primary-light md:h-[110px] mt-5 rounded-md pt-3 pl-3 text-primary md:flex md:justify-between grid grid-cols-2 gap-5'>
      <div className='border border-dashed border-primary h-[90px] w-[90px] rounded-md flex justify-center items-center'>
        {icon}
      </div>

      {/* COMPONENT REQUIRED */}
      <div className='md:ml-12 flex justify-center items-center'>
        <h2>{title}</h2>{' '}
        <span className='p-1 inline-block md:ml-4 bg-gray-500 text-white rounded-md text-xs'>
          Required
        </span>
      </div>

      {/* COMPONENT DETAILS */}
      <div className='flex items-center md:ml-12'>
        <Image
          height={150}
          width={150}
          src={
            'https://www.startech.com.bd/image/cache/catalog/processor/Intel/i3-10100/i3-10100-500x500.jpg'
          }
          alt='component'
          className='w-[70px] h-[70px] rounded-md'
        />
        <div>
          <h3 className='md:ml-2'>Intel 10th Gen Core i3 10100F Processor</h3>
        </div>
      </div>

      {/* CHOOSE BUTTON OR PRICE */}
      <div className='md:mr-4 flex items-center'>
        <Link href={`pc-builder/select-product/${query}`}>
          <PrimaryButton customClass='bg-primary p-2'>Choose</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default Component;

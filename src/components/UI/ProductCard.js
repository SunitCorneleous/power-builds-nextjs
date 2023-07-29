import Image from 'next/image';
import React from 'react';

const ProductCard = () => {
  return (
    <div className='mt-6 rounded-md shadow-md p-4 flex bg-violet-100 cursor-pointer'>
      <Image
        src='https://www.startech.com.bd/image/cache/catalog/processor/intel/i5-12600k/i5-12600k-01-500x500.jpg'
        alt='product'
        width='180'
        height='220'
        className='rounded-md mr-4'
      />

      <div>
        <h1 className='font-semibold'>
          Intel 12th Gen Core i5-12600K Alder Lake Processor
        </h1>

        <div className='mt-4 text-sm'>
          <p>Price: ৳32,000</p>
          <p>Category: CPU</p>
        </div>
        <div className='mt-4  text-sm'>
          <p>Status: In Stock</p>
          <p>Rating: 4</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

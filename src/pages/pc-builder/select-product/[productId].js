import RootLayout from '@/components/Layouts/RootLayout/RootLayout';
import PrimaryButton from '@/components/UI/PrimaryButton';
import Image from 'next/image';
import React from 'react';

const SelectProductPage = ({ products }) => {
  console.log(products[0]);

  return (
    <div>
      <h1 className='text-2xl text-center text-primary font-semibold'>
        Select your CPU
      </h1>

      {/* components with details */}

      <div className='my-6'>
        {products.map((item, i) => (
          <div
            key={i}
            className='w-auto mb-6 bg-primary-light p-2 rounded-md flex md:w-[80%] mx-auto'
          >
            <Image
              src={item.image}
              height={200}
              width={200}
              className='w-[35%] md:w-[15%]'
              alt='component'
            />
            <div className='flex items-center ml-4 text-primary font-semibold md:text-lg w-[35%]'>
              <h1>{item.productName}</h1>
            </div>

            <div className='w-[15%] ml-auto flex flex-col justify-center items-center'>
              <p className='text-lg font-semibold'>Price: {item.price}</p>
              <PrimaryButton customClass='bg-primary p-2 mt-2'>
                Choose
              </PrimaryButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectProductPage;

SelectProductPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async context => {
  const { params } = context;

  const res = await fetch(
    `http://localhost:3002/api/productByCategory?category=${params.productId}`
  );
  const products = await res.json();

  return {
    props: {
      products: products.data,
    },
  };
};

import PrimaryButton from '@/components/UI/PrimaryButton';
import { checkComponents } from '@/utils/checkComponents';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const Component = ({ icon, title, query }) => {
  const { components } = useSelector(state => state.pcBuilder);

  const componentName = title.split(' ')[0].toLowerCase();

  const addedComponent = components[componentName];

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
      {Object.keys(addedComponent).length > 0 ? (
        <div className='flex items-center md:ml-12'>
          <Image
            height={150}
            width={150}
            src={addedComponent.image}
            alt='component'
            className='w-[70px] h-[70px] rounded-md'
          />
          <div>
            <h3 className='md:ml-2'>{addedComponent.productName}</h3>
          </div>
        </div>
      ) : (
        <div>
          <p>Add Component</p>
        </div>
      )}

      {/* CHOOSE BUTTON OR PRICE */}
      <div className='md:mr-4 flex items-center'>
        <Link
          href={{
            pathname: `pc-builder/select-product/${query}`,
            query: { pageTitle: title },
          }}
        >
          <PrimaryButton customClass='bg-primary p-2'>
            Add To Builder
          </PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default Component;

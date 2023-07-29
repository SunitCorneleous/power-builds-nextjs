import Link from 'next/link';
import React, { useState } from 'react';

const items = [
  {
    label: 'CPU',
    route: '/cpu',
  },
  {
    label: 'Motherboard',
    route: '/motherboard',
  },
  {
    label: 'RAM',
    route: '/ram',
  },
  {
    label: 'Power Supply Unit',
    route: '/PSU',
  },
  {
    label: 'Storage Device',
    route: '/storage',
  },
  {
    label: 'Monitor',
    route: '/monitor',
  },
];

const DropDown = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className='relative inline-block text-left  md:ml-4'>
      <span
        type='button'
        onClick={() => setShowDropDown(!showDropDown)}
        className='px-4 py-2 cursor-pointer text-primary md:text-xl'
      >
        Categories
      </span>
      {showDropDown && (
        <div className='origin-top-right absolute right-0 md:left-0 mt-2 min-w-[180px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
          {/* Dropdown content */}
          <div className='py-2 px-3 text-left'>
            {items.map((item, i) => (
              <Link
                href={item.route}
                key={i}
                className='px-2 hover:bg-violet-100 block w-full rounded-md mb-1 py-1'
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;

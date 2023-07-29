import React from 'react';

const PageContainer = ({ children }) => {
  return (
    <div className='md:w-[85%] md:mx-auto md:py-6 py-4 px-4'>{children}</div>
  );
};

export default PageContainer;

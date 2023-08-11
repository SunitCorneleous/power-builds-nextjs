import RootLayout from '@/components/Layouts/RootLayout/RootLayout';
import ProductCard from '@/components/UI/ProductCard';
import React from 'react';

const PsuPage = ({ product }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 md:gap-5'>
      {product.map((item, i) => (
        <ProductCard key={i} data={item}></ProductCard>
      ))}
    </div>
  );
};

export default PsuPage;

PsuPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    `http://localhost:5000/api/productByCategory?category=psu`
  );
  const product = await res.json();

  return {
    props: {
      product: product.data,
    },
  };
};

import React from 'react';
import ProductCard from '../UI/ProductCard';

const FeaturedProducts = () => {
  return (
    <div className='py-6'>
      <h1 className='text-2xl font-bold text-primary'>Featured Products</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default FeaturedProducts;

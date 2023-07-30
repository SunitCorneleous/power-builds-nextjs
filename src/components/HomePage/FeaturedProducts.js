import React from "react";
import ProductCard from "../UI/ProductCard";

const FeaturedProducts = ({ products }) => {
  return (
    <div className="mb-14">
      <h1 className="text-2xl font-bold text-primary ">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {products?.map((item, i) => (
          <ProductCard key={i} data={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

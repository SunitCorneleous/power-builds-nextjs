import React from "react";
import ProductCard from "../UI/ProductCard";
import Link from "next/link";

const FeaturedProducts = ({ products }) => {
  return (
    <div className="mb-14">
      <h1 className="text-2xl font-bold text-primary ">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {products?.data?.map((item, i) => (
          <Link href={`products/${item._id}`} key={i}>
            <ProductCard key={i} data={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

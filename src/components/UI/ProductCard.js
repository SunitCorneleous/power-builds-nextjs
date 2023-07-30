import Image from "next/image";
import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div className="mt-6 rounded-md shadow-md p-4 flex bg-violet-100 cursor-pointer">
      <Image
        src={data.image}
        alt="product"
        width="180"
        height="220"
        className="rounded-md mr-4"
      />

      <div>
        <h1 className="font-semibold">{data.productName}</h1>

        <div className="mt-4 text-sm">
          <p>Price: {data.price}</p>
          <p>Category: {data.category}</p>
        </div>
        <div className="mt-4  text-sm">
          <p>Status: {data.status ? "In Stock" : "Stock Out"}</p>
          <p>Rating: {data.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

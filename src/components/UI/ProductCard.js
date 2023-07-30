import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ProductCard = ({ data }) => {
  const router = useRouter();

  return (
    <Link href={`${router.basePath}/products/${data._id}`}>
      <div className="mt-6 rounded-md shadow-md p-4 flex bg-violet-100 cursor-pointer min-h-[250px] max-h-[250px]">
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
    </Link>
  );
};

export default ProductCard;

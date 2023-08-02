import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const ProductCard = ({ data }) => {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1 }}
      className="mt-6 rounded-md shadow-md flex flex-col bg-violet-100 cursor-pointer h-auto lg:min-h-[250px] lg:max-w-[350px] mx-auto"
    >
      <Link href={`${router.basePath}/products/${data._id}`} className="p-4 ">
        <Image
          src={data.image}
          alt="product"
          width="320"
          height="320"
          className="rounded-md w-full mx-auto mb-4 "
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
      </Link>
    </motion.div>
  );
};

export default ProductCard;

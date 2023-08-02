import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const ProductCard = ({ data }) => {
  const router = useRouter();

  return (
    <Link href={`${router.basePath}/products/${data._id}`}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 1 }}
        className="mt-6 rounded-md shadow-md p-4 flex flex-col bg-violet-100 cursor-pointer h-auto lg:min-h-[250px] lg:max-w-[350px] mx-auto"
      >
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
      </motion.div>
    </Link>
  );
};

export default ProductCard;

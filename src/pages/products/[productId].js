import RootLayout from "@/components/Layouts/RootLayout/RootLayout";
import Image from "next/image";
import React from "react";

const ProductsPage = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row">
      <Image src={product.image} width={500} height={500} alt="product image" />

      <div className="flex flex-col justify-center items-start">
        <h2 className="text-2xl font-semibold">
          {product.productName.toUpperCase()}
        </h2>

        <div className="pt-6">
          <p className="text-xl mt-2">Product Price: ৳{product.price}</p>
          <p className="text-xl mt-2">
            Product Category: {product.category.toUpperCase()}
          </p>
          <p className="text-xl mt-2">
            Status:{" "}
            {product.status ? (
              <span className="text-green-700 font-semibold">In Stock</span>
            ) : (
              <span className="text-red-700 font-semibold">Stock Out</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

ProductsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3002/api/products");
  const products = await res.json();

  const paths = products.data.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `http://localhost:3002/api/productById/?productId=${params.productId}`
  );
  const product = await res.json();

  return {
    props: {
      product: product.data,
    },
  };
};

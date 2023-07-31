import RootLayout from "@/components/Layouts/RootLayout/RootLayout";
import ProductCard from "@/components/UI/ProductCard";
import React from "react";

const KeyboardPage = ({ product }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5">
      {product.map((item, i) => (
        <ProductCard key={i} data={item}></ProductCard>
      ))}
    </div>
  );
};

export default KeyboardPage;

KeyboardPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    `http://localhost:3002/api/productByCategory?category=keyboard`
  );
  const product = await res.json();

  return {
    props: {
      product: product.data,
    },
  };
};

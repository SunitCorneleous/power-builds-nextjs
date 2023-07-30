import Banner from "@/components/HomePage/Banner";
import FeaturedCategory from "@/components/HomePage/FeaturedCategory";
import FeaturedProducts from "@/components/HomePage/FeaturedProducts";
import RootLayout from "@/components/Layouts/RootLayout/RootLayout";

export default function HomePage({ products }) {
  return (
    <div>
      <Banner />
      <FeaturedProducts products={products} />
      <FeaturedCategory />
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3002/api/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};

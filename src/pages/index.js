import Banner from '@/components/HomePage/Banner';
import FeaturedCategory from '@/components/HomePage/FeaturedCategory';
import FeaturedProducts from '@/components/HomePage/FeaturedProducts';
import RootLayout from '@/components/Layouts/RootLayout/RootLayout';
import Head from 'next/head';

export default function HomePage({ products }) {
  return (
    <div>
      <Head>
        <title>Power Builds</title>
        <meta
          name='Power Builds Pc Builder'
          content='This is the home page of Power Builds Pc Builder'
        />
      </Head>
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
  const res = await fetch(`${process.env.SERVER}/products`);
  const products = await res.json();

  return {
    props: {
      products: products.data.slice(0, 6),
    },
  };
};

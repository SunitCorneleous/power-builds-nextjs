import Banner from '@/components/HomePage/Banner';
import FeaturedCategory from '@/components/HomePage/FeaturedCategory';
import FeaturedProducts from '@/components/HomePage/FeaturedProducts';
import RootLayout from '@/components/Layouts/RootLayout/RootLayout';

export default function HomePage() {
  return (
    <div>
      <Banner />
      <FeaturedProducts />
      <FeaturedCategory />
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

import RootLayout from '@/components/Layouts/RootLayout/RootLayout';
import PageContainer from '@/components/UI/PageContainer';

export default function HomePage() {
  return (
    <PageContainer>
      <div>
        <h1>This is home page</h1>
      </div>
    </PageContainer>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

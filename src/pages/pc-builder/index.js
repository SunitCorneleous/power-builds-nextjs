import RootLayout from "@/components/Layouts/RootLayout/RootLayout";
import React from "react";

const PcBuilderPage = () => {
  return (
    <div>
      <h1 className="text-xl md:text-4xl font-semibold text-primary text-center">
        Build your dream PC on your own
      </h1>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

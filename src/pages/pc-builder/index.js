import RootLayout from "@/components/Layouts/RootLayout/RootLayout";
import React from "react";
import Component from "./components/Component";

const PcBuilderPage = () => {
  return (
    <div>
      <h1 className="text-xl md:text-4xl font-semibold text-primary text-center">
        Build your dream PC on your own
      </h1>

      <div className="mt-6 md:w-[75%] mx-auto">
        <h2 className="text-2xl text-primary">
          Select your desired components
        </h2>

        {/* components */}
        <Component />
        <Component />
        <Component />
      </div>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

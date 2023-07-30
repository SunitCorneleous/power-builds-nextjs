import React from "react";
import DropDown from "./components/DropDown";
import PrimaryButton from "@/components/UI/PrimaryButton";
import PageContainer from "@/components/UI/PageContainer";
import Link from "next/link";

const RootLayout = ({ children }) => {
  return (
    <div className="">
      {/* header */}
      <div className="flex justify-between items-center  md:w-[85%] md:mx-auto md:py-6 py-4 px-4">
        {/* logo and categories */}
        <div className="flex items-center">
          <Link href="/">
            <h1 className="font-bold text-3xl text-primary">LOGO</h1>
          </Link>

          <DropDown />
        </div>

        {/* pc builder button and login */}
        <div>
          <PrimaryButton customClass="">PC Builder</PrimaryButton>
        </div>
      </div>

      {/* content */}

      <PageContainer>{children}</PageContainer>

      {/* footer */}
      <div className="md:w-[85%] md:mx-auto md:py-6 py-4 px-4">
        <h1 className="text-center">footer</h1>
      </div>
    </div>
  );
};

export default RootLayout;
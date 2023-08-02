import React from "react";
import DropDown from "./components/DropDown";
import PrimaryButton from "@/components/UI/PrimaryButton";
import PageContainer from "@/components/UI/PageContainer";
import Link from "next/link";
import Footer from "./components/Footer";
import { useRouter } from "next/router";

const RootLayout = ({ children }) => {
  const router = useRouter();

  return (
    <div>
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
          <Link href={`${router.basePath}/pc-builder`}>
            <PrimaryButton customClass="">PC Builder</PrimaryButton>
          </Link>
        </div>
      </div>

      {/* content */}

      <PageContainer>{children}</PageContainer>

      {/* footer */}
      <div className=" md:mx-auto md:py-6 py-4">
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;

import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="md:min-h-[70vh] sm:bg-violet-300 md:bg-transparent mb-14 flex flex-col-reverse md:flex-row  justify-center items-center p-5 md:p-14">
      <div className="mr-5 md:w-[55%]">
        <h1 className="md:text-4xl md:mb-5 md:font-semibold text-2xl font-semibold mb-4">
          Welcome to PowerBuilds - Unleash Your PC Potential!
        </h1>
        <p className="md:text-xl md:mb-5 md:font-normal">
          Empowering your PC experience with cutting-edge technology. Whether
          you&apos;re a gamer, content creator, or tech enthusiast, we have
          everything you need for a custom-built masterpiece.
        </p>
      </div>
      <div className="w-[45%]">
        <Image
          src="https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/core-i7-10700-desktop-pc-01-500x500.webp"
          height={350}
          width={350}
          alt="banner image"
          className="hidden md:block md:w-full rounded-md"
        />
      </div>
    </div>
  );
};

export default Banner;

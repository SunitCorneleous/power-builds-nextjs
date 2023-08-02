import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const items = [
  {
    title: "CPU / Processor",

    path: "categories/cpu",
  },
  {
    title: "Motherboard",

    path: "categories/motherboard",
  },
  {
    title: "RAM",

    path: "categories/ram",
  },
  {
    title: "Power Supply Unit",

    path: "categories/psu",
  },
  {
    title: "Storage Device",

    path: "categories/storage",
  },
  {
    title: "Monitor",

    path: "categories/monitor",
  },
  {
    title: "GPU",

    path: "categories/gpu",
  },
  {
    title: "Mouse",

    path: "categories/mouse",
  },
  {
    title: "Keyboard",

    path: "categories/keyboard",
  },
  {
    title: "Casing",

    path: "categories/casing",
  },
];

const DropDown = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const router = useRouter();

  return (
    <div className="relative inline-block text-left  md:ml-4 z-10">
      <span
        type="button"
        onClick={() => setShowDropDown(!showDropDown)}
        className="px-4 py-2 cursor-pointer text-primary md:text-xl"
      >
        Categories
      </span>
      {showDropDown && (
        <div className="origin-top-right absolute right-0 md:left-0 mt-2 min-w-[180px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          {/* Dropdown content */}
          <div className="py-2 px-3 text-left">
            {items.map((item, i) => (
              <Link
                onClick={() => setShowDropDown(!showDropDown)}
                href={`${router.basePath}/${item.path}`}
                key={i}
                className="px-2 hover:bg-violet-100 block w-full rounded-md mb-1 py-1"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;

import React from "react";
import { RiGithubFill, RiChromeFill } from "@remixicon/react";

const SocialIcons = () => {
  return (
    <div className="flex mt-8 justify-center lg:justify-start">
      <a
        href="https://github.com/abhinavbaral"
        className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-black transition-transform transform hover:scale-125"
      >
        <RiGithubFill size={24} />
      </a>
      <a
        href="#"
        className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-black transition-transform transform hover:scale-125 ml-4"
      >
        <RiChromeFill size={24} />
      </a>
    </div>
  );
};

export default SocialIcons;

import React from "react";
import soorajjain_hero from "../../assets/hro-sooraj.png";

function HeroSection() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-4 sm:mt-8 gap-6 mx-5 sm:mx-0">
        <div className="block-1 font-mono sm:text-[48px] text-[32px] font-extrabold text-center">
          Web developer and
          <br /> MERN stack developer
        </div>
        <div className="block-2 font-sans sm:text-[24px] text-[20px] text-center ">
          I design and code beautifully simple things, and I love what I do.
        </div>

        <div className="block-3">
          <img className="w-[500px]" src={soorajjain_hero} alt="Sooraj Jain" />
        </div>
      </div>
    </>
  );
}

export default HeroSection;

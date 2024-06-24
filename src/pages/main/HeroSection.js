import React from "react";
import soorajjain_hero from "../../assets/Screenshot 2024-06-24 at 8.47.15 PM.png";

function HeroSection() {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-14 gap-6">
        <div className="block-1 font-serif text-[48px] font-extrabold">
          Full Stack Frontend Developer
        </div> 
        <div className="block-2 font-sans text-[24px] text-center ">
          I design and code beautifully simple things, and I love what I do.
        </div>
        
        <div className="block-3">
          <img className="w-[500px]" src={soorajjain_hero} />
        </div>
        <div className="w-full ">
            <div>
            Hi, I’m Matt. Nice to meet you.
            Since beginning my journey as a freelance designer 12 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops.
            </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;

import React from "react";
import logo from "../../assets/logo-white.png";
import XIcon from "@mui/icons-material/X";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="w-full bg-[rgb(110,7,243)] h-[480px] text-[#FFFFFF] flex justify-center items-center flex-col gap-10 mt-10">
        <div className="w-[70px]">
          <img src={logo} alt="" />
        </div>
        <div className="font-mono sm:text-[22px] text-[18px] font-extrabold text-center mx-10 sm:mx-0 sm:w-[600px] ">
          Living, learning, & leveling up <br /> one day at a time.
        </div>
        <div className="Buttons-link flex gap-3">
          <button className="w-[47px] h-[47px] border border-white rounded-[50%] hover:text-[rgb(110,7,243)] hover:bg-white">
            <a
              href="https://x.com/soorajain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <XIcon className="icon text-white hover:text-[rgb(110,7,243)] hover:bg-white" />
            </a>
          </button>
          <button className="w-[47px] h-[47px] border border-white rounded-[50%]hover:text-[rgb(110,7,243)] hover:bg-white">
            <a
              href="https://soorajjain.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LanguageIcon className="icon text-white hover:text-[rgb(110,7,243)] hover:bg-white" />
            </a>
          </button>
          <button className="w-[47px] h-[47px] border border-white rounded-[50%]hover:text-[rgb(110,7,243)] hover:bg-white">
            <a
              href="https://www.linkedin.com/in/soorajjain/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="icon text-white hover:text-[rgb(110,7,243)] hover:bg-white" />
            </a>
          </button>

          <button className="w-[47px] h-[47px] border border-white rounded-[50%]hover:text-[rgb(110,7,243)] hover:bg-white">
            <a
              href="https://github.com/soorajjain"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="icon text-white hover:text-[rgb(110,7,243)] hover:bg-white" />
            </a>
          </button>
          <button className="w-[47px] h-[47px] border border-white rounded-[50%] hover:text-[rgb(110,7,243)] hover:bg-white">
            <a
              href="mailto:soorajjain51@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon className="icon text-white hover:text-[rgb(110,7,243)] hover:bg-white" />
            </a>
          </button>
        </div>
        <div className="">
          Handcrafted by me <FavoriteBorderIcon />
          &nbsp;twentytwentyfour
        </div>
      </div>
    </div>
  );
}

export default Footer;

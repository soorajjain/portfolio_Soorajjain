import React from "react";
import computer from "../../assets/hero-devices-sj.svg";
import code from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center mt-10">
          <img
            className="w-[327px] sm:w-[860px]"
            src={computer}
            alt="code.png"
          />
          <div className="w-full  bg-[#6E07F3] h-[600px] text-[#FFFFFF] flex justify-center items-center flex-col gap-10 ">
            <div className="font-mono sm:text-[32px] text-[24px] font-extrabold text-center mx-10 sm:mx-0 sm:w-[600px]">
              Hi, I’m Sooraj Jain. Nice to meet you.
            </div>
            <div className="relative font-serif text-[20px] w-[300px] sm:w-[600px] ">
              <h1 className="text-center">
                Since beginning my journey as a freelance designer 12 years ago,
                I've done remote work for agencies, consulted for startups, and
                collaborated with talented people to create digital products for
                both business and consumer use. I'm quietly confident, naturally
                curious, and perpetually working on improving my chops.
              </h1>
            </div>
          </div>

          <div className="absolute w-[600px] top-[1600px] bg-[#ffffff]  flex flex-col gap-6 border rounded-3xl justify-center items-center text-[#141c3a] text-center shadow-2xl">
            <div className="code w-[82px] mt-10">
              <img
                className="w-[72px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9ePgveMjN5Z9IdGaoO-i_yfE3-ASN7QATU1_PSuqK5C6VM0m"
                alt="code"
              />
            </div>
            <div>
              <h1 className="text-[24px] font-mono font-extrabold">
                Frontend Developer
              </h1>
            </div>
            <div>
              <h6 className="w-[300px]">
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </h6>
            </div>
            <div className="text-[18px] ">
              <span className="text-[#6E07F3]">Languages I speak:</span>
              <br /> HTML, CSS, JS
            </div>
            <div className="">
              <span className="text-[#6E07F3]">Dev Tools:</span>
              <br />
              React JS <br />
              Github
              <br /> Netlify
              <br />
              Tailwind CSS
              <br /> VS Code
            </div>
            <div className="w-[300px] mb-10">
              <h1>
                You can learn more about my work and connect with me on &nbsp;
                <a
                  className="text-[#6E07F3] underline"
                  href="www.linkedin.com/in/soorajjain"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{" "}
                and explore my projects on &nbsp;
                <a
                  className="text-[#6E07F3] underline"
                  href="https://github.com/soorajjain"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub.
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

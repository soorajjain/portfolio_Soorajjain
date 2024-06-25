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
          <div
            className="w-full  bg-[rgb(110,7,243)] h-[700px] text-[#FFFFFF] flex justify-center items-center flex-col gap-10 "
            id="about"
          >
            <div className="font-mono sm:text-[32px] text-[24px] font-extrabold text-center mx-10 sm:mx-0 sm:w-[600px] sm:mt-[-200px] mt-[-100px] ">
              Hi there, I'm Sooraj Jain 👋
              <br /> Nice to meet you.
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

          {/* 1st absolute box starts here */}
          <div className="absolute sm:w-[40%] lg:w-[35%] w-[80%] sm:top-[1700px] top-[1465px] h-[640px] left-[10%] sm:left-[2%]lg:left-[14%] bg-[#ffffff] flex flex-col gap-6 border rounded-2xl justify-center items-center text-[#141c3a] text-center hover:shadow-2xl ">
            <div className="code w-[82px] mt-[-30px] sm:mt-10">
              <img
                className="w-[72px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9ePgveMjN5Z9IdGaoO-i_yfE3-ASN7QATU1_PSuqK5C6VM0m"
                alt="code"
              />
            </div>
            <div>
              <h1 className="text-[24px] font-mono font-extrabold mx-2">
                Frontend Developer
              </h1>
            </div>
            <div>
              <h6 className="sm:w-[200px] lg:w-[300px] w-[250px]">
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
              Tailwind CSS <br />
              MUI, Shadcn <br /> Github
              <br /> Netlify
              <br />
              VS Code
              <br />
              npm
              <br />
              Prettier
            </div>
          </div>
          {/* 1st absolute box ends here */}

          {/* 2nd absolute box starts here */}
          <div className="absolute sm:w-[40%] lg:w-[35%] w-[80%] sm:top-[1700px] h-[640px] right-[10%] top-[2125px] sm:right-[4%] lg:right-[14%] bg-[#ffffff] flex flex-col gap-6 border rounded-2xl justify-center items-center text-[#141c3a] text-center hover:shadow-2xl">
            <div className="code w-[82px] mt-[-30px]">
              <img
                className="w-[72px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9ePgveMjN5Z9IdGaoO-i_yfE3-ASN7QATU1_PSuqK5C6VM0m"
                alt="code"
              />
            </div>
            <div>
              <h1 className="text-[24px] font-mono font-extrabold mx-5">
                MERN Stack Developer
              </h1>
            </div>
            <div>
              <h6 className="sm:w-[200px] lg:w-[300px] w-[250px]">
                I focus on creating engaging and dynamic user interfaces with
                seamless backend integration.
              </h6>
            </div>
            <div className="text-[18px] ">
              <span className="text-[#6E07F3]">Languages I speak:</span>
              <br /> JavaScript, HTML, CSS
            </div>
            <div>
              <span className="text-[#6E07F3]">Dev Tools:</span>
              <div className="grid grid-cols-2 gap-5 text-center">
                <div>
                  React JS <br />
                  Node JS
                  <br /> Express JS
                  <br /> MongoDB
                  <br /> Github
                  <br />
                  Tailwind CSS
                  <br />
                </div>
                <div>
                  React Router <br />
                  Mongoose <br />
                  Postman
                  <br /> Nodemon
                  <br /> Netlify
                  <br /> VS Code
                </div>
              </div>
            </div>
          </div>
          {/* 2nd absolute box ends here */}
        </div>

        {/* absolute link to my page starts here */}
        <div className="absolute sm:w-[80%] sm:left-[10%] w-[90%] sm:px-10 mb-10 bg-[#6E07F3] h-[100px] sm:h-[30px] sm:top-[2270px] top-[2749px] text-white text-center left-[5%] font-mono border rounded-xl hover:shadow-2xl">
          <h1>
            You can learn more about my work and connect with me on &nbsp;
            <a
              className="text-[#ffffff] underline"
              href="https://www.linkedin.com/in/soorajjain/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            and explore my projects on &nbsp;
            <a
              className="text-[#ffffff] underline"
              href="https://github.com/soorajjain"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub.
            </a>
          </h1>
        </div>
        {/* absolute link to my page ends here */}
      </div>
    </>
  );
}

export default About;

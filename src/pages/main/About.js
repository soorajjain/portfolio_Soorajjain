import React from "react";
import computer from "../../assets/hero-devices-sj.svg";
import Button from "@mui/material/Button";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import myResume from "../../assets/pdf/soorajjain_webdev.pdf";

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
            <div className="font-eurostile sm:text-[32px] text-[24px] font-extrabold text-center mx-10 sm:mx-0 sm:w-[600px] sm:mt-[-150px] mt-[-50px] ">
              Hi there, I'm Sooraj Jain 👋
              <br /> Nice to meet you.
            </div>
            <a href={myResume} target="_blank" rel="noopener noreferrer">
              <Button
                variant="contained"
                className="!p-3 !sm:w-[300px] w-[150px]"
                endIcon={<RocketLaunchIcon />}
              >
                My Resume
              </Button>
            </a>
            <div className="relative font-serif sm:text-[20px] text-[18px] w-[330px] sm:w-[600px] ">
              <h1 className="text-center">
                I'm a passionate full stack developer who loves building dynamic
                and responsive web applications. Currently, I'm diving deep into
                the MERN stack—MongoDB, Express, React, and Node.js—to create
                seamless and interactive user experiences. By mastering these
                technologies, I aim to deliver high-quality, innovative web
                applications.
              </h1>

              <button></button>
            </div>
          </div>

          {/* 1st absolute box starts here */}
          <div className="absolute sm:w-[45%] lg:w-[35%] w-[80%] sm:top-[1700px] top-[1465px] h-[640px] left-[10%] sm:left-[4%] lg:left-[14%] bg-[#ffffff] flex flex-col gap-6 border rounded-2xl justify-center items-center text-[#141c3a] text-center hover:shadow-2xl ">
            <div className="code w-[82px] mt-[-30px] sm:mt-10">
              <img
                className="w-[72px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9ePgveMjN5Z9IdGaoO-i_yfE3-ASN7QATU1_PSuqK5C6VM0m"
                alt="code"
              />
            </div>
            <div>
              <h1 className="text-[24px] font-eurostile font-extrabold mx-2">
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
              <br />
              JavaScript, HTML, CSS
            </div>
            <div className="">
              <span className="text-[#6E07F3]">Dev Tools:</span>
              <br />
              React JS <br />
              Tailwind CSS <br />
              MUI, Shadcn/ui <br /> Github
              <br /> Netlify
              <br />
              VS Code
              <br />
            </div>
          </div>
          {/* 1st absolute box ends here */}

          {/* 2nd absolute box starts here */}
          <div className="absolute sm:w-[45%] lg:w-[35%] w-[80%] sm:top-[1700px] h-[640px] right-[10%] top-[2125px] sm:right-[4%] lg:right-[14%] bg-[#ffffff] flex flex-col gap-6 border rounded-2xl justify-center items-center text-[#141c3a] text-center hover:shadow-2xl">
            <div className="code w-[82px] mt-[-30px] sm:mt-6">
              <img
                className="w-[72px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9ePgveMjN5Z9IdGaoO-i_yfE3-ASN7QATU1_PSuqK5C6VM0m"
                alt="code"
              />
            </div>
            <div>
              <h1 className="text-[24px] font-eurostile font-extrabold mx-5">
                Full Stack Developer
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
              <br /> Python, JavaScript
            </div>
            <div>
              <span className="text-[#6E07F3]">Dev Tools:</span>
              <div className="grid grid-cols-2 gap-5 text-center">
                <div>
                  Node JS
                  <br /> React JS
                  <br /> Express JS
                  <br /> MongoDB
                  <br /> SQL
                  <br /> Axios
                  <br /> GitHub
                  <br />
                </div>
                <div>
                  Mongoose <br />
                  Postman API
                  <br /> Nodemon
                  <br />
                  Microservices Architecture
                  <br />
                  CI/CD
                  <br /> Netlify
                  <br /> VS Code
                </div>
              </div>
            </div>
          </div>
          {/* 2nd absolute box ends here */}
        </div>

        {/* absolute link to my page starts here */}
        <div className="absolute sm:w-[95%] md:w-[60%] md:left-[20%] sm:left-[2.5%] w-[90%] sm:px-10 mb-10 bg-[#6E07F3] h-[100px] sm:h-[90px] sm:top-[2330px] top-[2749px] text-white text-center left-[5%] font-mono border rounded-xl hover:shadow-2xl text-sm sm:text-sm flex items-center">
          <h1 className="mx-3 text-center">
            You can learn more about my work and connect with me on&nbsp;
            <a
              className="text-[#ffffff] underline"
              href="https://www.linkedin.com/in/soorajjain/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            and explore my projects on&nbsp;
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

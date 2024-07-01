import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import portfolio from "../../assets/Sooraj_portfolio.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import calculator_project from "../../assets/calculator_project.png";
import natural_foods from "../../assets/natural_foods_project.png";
import freelance from "../../assets/freelance_project.png";
import microsoft from "../../assets/microsoft_clone.png";

import { Link } from "react-router-dom";

function RecentWork() {
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        border: "4px solid currentColor",
      },
    },
  }));

  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  });

  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  }));

  const ImageMarked = styled("span")(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  }));
  return (
    <>
      {/* blank space starts here -> bcs of relative and absolute */}
      <div>
        <div className="w-full sm:h-[650px] h-[1380px] bg-[#FFFFFF]"></div>
      </div>
      {/* blank space ends here -> bcs of relative and absolute */}
      <div className="Headers flex flex-col justify-center items-center gap-3 mt-[35px] md:mt-[-35px]">
        <div className="title font-eurostile sm:text-[32px] text-[30px] font-extrabold text-center mx-10 sm:mx-0 sm:w-[600px">
          My Recent Works
        </div>
        <div className="subtitle font-serif text-[20px] w-[300px] sm:w-[600px] text-center">
          Here are a few past design projects I've worked on.
        </div>
      </div>

      {/* grid starts here */}
      <div className="flex flex-wrap gap-4 w-full items-center justify-center mt-10">
        <div className="work-1">
          <Box
            className=""
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <ImageButton
              className="sm:h-[275px] sm:w-[413px] h-[217px] w-[327px] text-[18px] font-serif"
              focusRipple
            >
              <ImageSrc style={{ backgroundImage: `url(${freelance})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image className="flex flex-col mt-10 gap-6">
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: "relative",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  <Link to="#" target="_blank" rel="noopener noreferrer">
                    Freelance HUB [MERN]
                  </Link>
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/soorajjain/FreelanceHub.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-[1px] border-white hover:bg-white hover:text-black rounded-2xl md:p-3 md:px-3 p-1 px-1.5 text-l sm:text-sm flex items-center text-center"
                  >
                    <GitHubIcon className="icon" />
                  </a>
                </div>
              </Image>
            </ImageButton>
          </Box>
        </div>
        <div className="work-2">
          <Box
            className=""
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <ImageButton
              className="sm:h-[275px] sm:w-[413px] h-[217px] w-[327px] text-[18px] font-serif"
              focusRipple
            >
              <ImageSrc style={{ backgroundImage: `url(${natural_foods})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image className="flex flex-col mt-10 gap-6">
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: "relative",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  Natural Foods Website
                  <br /> [React, Tailwind, MUI]
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
                <div className="flex gap-4">
                  <a
                    href="https://soorajjain.github.io/Natural_foods-web_frontend/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-[1px] border-white hover:bg-black hover:white hover:text-white rounded-3xl sm:p-4 sm:px-4 p-2 px-3 text-sm sm:text-l flex items-center text-center"
                  >
                    Live demo
                  </a>
                  <a
                    href="https://github.com/soorajjain/Natural_foods-web_frontend/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-[1px] border-white hover:bg-white hover:text-black rounded-2xl md:p-3 md:px-3 p-1 px-1.5 text-l sm:text-sm flex items-center text-center"
                  >
                    <GitHubIcon className="icon" />
                  </a>
                </div>
              </Image>
            </ImageButton>
          </Box>
        </div>
        <div className="work-3">
          <Box
            className=""
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <ImageButton
              className="sm:h-[275px] sm:w-[413px] h-[217px] w-[327px] text-[18px] font-serif"
              focusRipple
            >
              <ImageSrc style={{ backgroundImage: `url(${portfolio})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image className="flex flex-col mt-10 gap-6">
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: "relative",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  PortFolio <br /> [React JS, MUI, Tailwind, EmailJS]
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
                <div className="flex gap-4">
                  <Link
                    to="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-[1px] border-white hover:bg-black hover:white hover:text-white rounded-3xl sm:p-4 sm:px-4 p-2 px-3 text-sm sm:text-l flex items-center text-center"
                  >
                    Live demo
                  </Link>
                  <a
                    href="https://github.com/soorajjain/Portfolio_Sooraj-Jain.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-[1px] border-white hover:bg-white hover:text-black rounded-2xl md:p-3 md:px-3 p-1 px-1.5 text-l sm:text-sm flex items-center text-center"
                  >
                    <GitHubIcon className="icon" />
                  </a>
                </div>
              </Image>
            </ImageButton>
          </Box>
        </div>
        <div className="work-4">
          <Box
            className=""
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <ImageButton
              className="sm:h-[275px] sm:w-[413px] h-[217px] w-[327px] text-[18px] font-serif"
              focusRipple
            >
              <ImageSrc
                style={{ backgroundImage: `url(${calculator_project})` }}
              />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image className="flex flex-col mt-10 gap-6">
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: "relative",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  Calculator [React JS, Tailwind]
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
                <div className="flex gap-4">
                  <a
                    href="https://soorajjain.github.io/Calculator-React-Tailwind/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-[1px] border-white hover:bg-black hover:white hover:text-white rounded-3xl sm:p-4 sm:px-4 p-2 px-3 text-sm sm:text-l flex items-center text-center"
                  >
                    Live demo
                  </a>
                  <a
                    href="https://github.com/soorajjain/Calculator-React-Tailwind"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-[1px] border-white hover:bg-white hover:text-black rounded-2xl md:p-3 md:px-3 p-1 px-1.5 text-l sm:text-sm flex items-center text-center"
                  >
                    <GitHubIcon className="icon" />
                  </a>
                </div>
              </Image>
            </ImageButton>
          </Box>
        </div>
        <div className="work-5">
          <Box
            className=""
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <ImageButton
              className="sm:h-[275px] sm:w-[413px] h-[217px] w-[327px] text-[18px] font-serif"
              focusRipple
            >
              <ImageSrc style={{ backgroundImage: `url(${microsoft})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image className="flex flex-col mt-10 gap-6">
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="inherit"
                  sx={{
                    position: "relative",
                    p: 4,
                    pt: 2,
                    pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                >
                  Microsoft UI Clone
                  <br />
                  [Responsive, Vite]
                  <ImageMarked className="MuiImageMarked-root" />
                </Typography>
                <div className="flex gap-4">
                  <a
                    href="https://soorajjain.github.io/tailwind_microsoft_responsive/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-[1px] border-white hover:bg-black hover:white hover:text-white rounded-3xl sm:p-4 sm:px-4 p-2 px-3 text-sm sm:text-l flex items-center text-center"
                  >
                    Live demo
                  </a>
                  <a
                    href="https://github.com/soorajjain/tailwind_microsoft_responsive.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-[1px] border-white hover:bg-white hover:text-black rounded-2xl md:p-3 md:px-3 p-1 px-1.5 text-l sm:text-sm flex items-center text-center"
                  >
                    <GitHubIcon className="icon" />
                  </a>
                </div>
              </Image>
            </ImageButton>
          </Box>
        </div>
      </div>

      {/* grid ends here */}
    </>
  );
}

export default RecentWork;

import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

function RecentWork() {
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: 200,
    [theme.breakpoints.down("sm")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
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
      <div className="Headers flex flex-col justify-center items-center gap-3 mt-[35px]">
        <div className="title font-mono sm:text-[32px] text-[30px] font-extrabold text-center mx-10 sm:mx-0 sm:w-[600px">
          My Recent Works
        </div>
        <div className="subtitle font-serif text-[20px] w-[300px] sm:w-[600px] text-center">
          Here are a few past design projects I've worked on.
        </div>
      </div>

      {/* grid starts here */}
      <div className="flex flex-wrap gap-4 w-full items-center justify-center mt-10">
        <div className="work-1 sm:h-[275px] sm:w-[413px] h-[217px] w-[327px]  text-[18px] font-serif border rounded-md border-black bg-[rgb(110,7,243)]">
          <img src="" alt="" />
        </div>
        <div className="work-2 sm:h-[275px] sm:w-[413px] h-[217px] w-[327px]  text-[18px] font-serif border rounded-md border-black bg-[rgb(110,7,243)]">
          <img src="" alt="" />
        </div>
        <div className="work-3 sm:h-[275px] sm:w-[413px] h-[217px] w-[327px]  text-[18px] font-serif border rounded-md border-black bg-[rgb(110,7,243)]">
          <img src="" alt="" />
        </div>
        <div className="work-4 sm:h-[275px] sm:w-[413px] h-[217px] w-[327px]  text-[18px] font-serif border rounded-md border-black bg-[rgb(110,7,243)]">
          <img src="" alt="" />
          sm:{" "}
        </div>
        <div className="work-5 sm:h-[275px] sm:w-[413px] h-[217px] w-[327px]  text-[18px] font-serif border rounded-md border-black bg-[rgb(110,7,243)]">
          <img src="" alt="" />
        </div>
        <div className="work-6 sm:h-[275px] sm:w-[413px] h-[217px] w-[327px]   text-[18px] font-serif border rounded-md border-black bg-[rgb(110,7,243)]">
          <img src="" alt="" />
        </div>
      </div>

      {/* grid ends here */}
    </>
  );
}

export default RecentWork;

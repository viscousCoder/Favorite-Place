/* eslint-disable react/prop-types */

import { useEffect, useRef } from "react";
import { Typography, Box, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainCarousel.css";

// Custom Arrow Components
const NextArrow = ({ sliderRef }) => (
  <IconButton
    onClick={() => sliderRef.current.slickNext()}
    sx={{
      position: "absolute",
      right: 20,
      top: "50%",
      transform: "translateY(-50%)",
      color: "#fff",
      zIndex: 1,
    }}
  >
    <ArrowForwardIosIcon fontSize="large" />
  </IconButton>
);

const PrevArrow = ({ sliderRef }) => (
  <IconButton
    onClick={() => sliderRef.current.slickPrev()}
    sx={{
      position: "absolute",
      left: 20,
      top: "50%",
      transform: "translateY(-50%)",
      color: "#fff",
      zIndex: 1,
    }}
  >
    <ArrowBackIosIcon fontSize="large" />
  </IconButton>
);

const MainCarousel = ({ data }) => {
  const sliderRef = useRef(null);

  // Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    fade: true,
    nextArrow: <NextArrow sliderRef={sliderRef} />,
    prevArrow: <PrevArrow sliderRef={sliderRef} />,
    lazyLoad: "ondemand",
    onInit: () => {
      if (sliderRef.current) {
        sliderRef.current.slickPlay();
      }
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (sliderRef.current) {
        console.log("hii");
        sliderRef.current.slickPlay();
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Full-width Carousel */}
      <Slider ref={sliderRef} {...settings}>
        {data?.moreImages?.map((item, index) => (
          <Box
            key={index}
            className="carousel-itemss"
            sx={{
              backgroundImage: `url(${item})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* <Typography className="carousel-text" variant="body2">
              {item.text}
            </Typography>
            <br />
            <Typography className="carousel-text" variant="body2">
              {item.shortDes}
            </Typography> */}
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default MainCarousel;

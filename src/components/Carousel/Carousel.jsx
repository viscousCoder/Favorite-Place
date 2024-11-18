/* eslint-disable react/prop-types */

import { useEffect, useRef } from "react";
import { Typography, Box, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // Importing the CSS

// Sample data for carousel images and text
const carouselItems = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1697729831106-dbca67df36af?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGF3YSUyMG1haGFsJTIwamFpcHVyJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
    text: "Where Architecture Meets the Air – Hawa Mahal Awaits.",
    shortDes:
      "Feel the cool winds and marvel at the intricate beauty of Hawa Mahal, a symbol of Rajasthan’s rich cultural heritage.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1729495215025-4e2885a8475c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydW5hY2hhbCUyMHByYWRlc2h8ZW58MHx8MHx8fDA%3D",
    text: "Elevate Your Senses – Discover the Mountains.",
    shortDes:
      "Breathe in the fresh air, feel the thrill of the climb, and experience the world from new heights. It’s time to elevate your adventure.",
  },

  {
    image:
      "https://images.unsplash.com/photo-1712510817140-917938f92e5b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHV0dGFyYWtoYW5kJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
    text: "Where the Ganges Meets the Soul – Discover Rishikesh.",
    shortDes:
      "Rishikesh is the perfect place to recharge your spirit. Let the holy river guide you to inner peace and profound experiences.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1697729594707-0fc9e51c8eed?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z29hJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D",
    text: "Life is better at the beach",
    shortDes:
      "Keep calm and go to the beach. Life takes you down many paths, but the best ones lead to the beach. ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1689676452888-c9ccc1896e96?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHV0dGFyYWtoYW5kJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D",
    text: "Reach New Heights, Find New Views.",
    shortDes:
      "From snow-capped peaks to breathtaking vistas, every step you take brings you closer to a view that will take your breath away.",
  },
];

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

const Carousel = () => {
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
        {carouselItems.map((item, index) => (
          <Box
            key={index}
            className="carousel-item"
            sx={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Typography className="carousel-text" variant="body2">
              {item.text}
            </Typography>
            <br />
            <Typography className="carousel-text" variant="body2">
              {item.shortDes}
            </Typography>
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

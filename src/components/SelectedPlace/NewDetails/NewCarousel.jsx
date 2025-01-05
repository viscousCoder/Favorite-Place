/* eslint-disable react/prop-types */

import Slider from "react-slick";
import "./Carousel.css"; // Create this file to add custom styles
import { useMediaQuery, useTheme } from "@mui/material";

const images = [
  {
    src: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZhbGxleSUyMG9mJTIwZmxvd2VycyUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Forest Research Institute",
  },
  {
    src: "https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZhbGxleSUyMG9mJTIwZmxvd2VycyUyMG5hdGlvbmFsJTIwcGFya3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Rajaji National Park",
  },
  {
    src: "https://images.unsplash.com/photo-1685256575386-fb1ab26c2388?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFsbGV5JTIwb2YlMjBmbG93ZXJzfGVufDB8fDB8fHww",
    title: "Mindrolling Monastery",
  },
  {
    src: "https://images.pexels.com/photos/20141247/pexels-photo-20141247.jpeg?cs=srgb&dl=pexels-julien-riedel-907961520-20141247.jpg&fm=jpg",
    title: "Clock Tower",
  },
  // Add more images as needed
];

const NewCarousel = ({ data }) => {
  const theme = useTheme();
  const sizexs = useMediaQuery(theme.breakpoints.down("md"));
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: sizexs ? 2 : 3, // Adjust as needed
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings}>
      {data.features?.map((image, index) => (
        <div key={index} className="carousel-item-card slick-slidess">
          <img src={image.image} alt={image.title} className="carousel-image" />
          <div className="carousel-title">{image.title}</div>
        </div>
      ))}
    </Slider>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow next-arrow" onClick={onClick}>
      ➔
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow prev-arrow" onClick={onClick}>
      ←
    </div>
  );
};

export default NewCarousel;

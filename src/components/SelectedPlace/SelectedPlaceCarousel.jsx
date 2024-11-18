/* eslint-disable react/prop-types */

import { Box } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SelectedPlaceCarousel = ({ data }) => {
  return (
    <Box>
      <Carousel infiniteLoop={true} autoPlay={true}>
        {data?.moreImages?.map((data) => (
          <Box
            key={data}
            sx={{
              height: "100%",
              width: "100%",
              // position: "center",
              objectFit: "cover",
              // height: "300px",
              // width: "auto",
              aspectRatio: 3,
              display: "block",
            }}
          >
            <img src={data} alt={data.title} style={{}} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default SelectedPlaceCarousel;

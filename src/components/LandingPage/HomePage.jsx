import { Box, Container } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import FeatureSection from "../Featured/Featured";
import ImageButtonSec from "../ImageButton/ImageButton";
import LeftRight from "../LeftRight/LeftRight";

const HomePage = () => {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 143px)",
        // mt: { xs: "48px", lg: "64px" },
      }}
    >
      <Carousel />
      <Container>
        <FeatureSection />
        <LeftRight />
        <ImageButtonSec />
      </Container>
    </Box>
  );
};

export default HomePage;

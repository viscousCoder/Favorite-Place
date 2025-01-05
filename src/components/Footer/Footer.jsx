import {
  Facebook,
  Instagram,
  TravelExplore,
  Twitter,
} from "@mui/icons-material";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { useTheme } from "../../context/Theme";

const Footer = () => {
  const { isDark } = useTheme();
  return (
    <Box sx={{ background: !isDark ? "#dedbdb" : "#787373" }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          pt: 2,
        }}
      >
        <Typography variant="h6">Favourite places</Typography>
      </Container>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          pt: 2,
        }}
      >
        <Stack direction={"row"} spacing={3}>
          <Box>Home</Box>
          <Box>Price</Box>
          <Box>Policy</Box>
          <Box>Book</Box>
        </Stack>
      </Container>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          //   pt: 2,
        }}
      >
        <Stack direction={"row"} spacing={3}>
          <IconButton>
            <Instagram color="primary" />
          </IconButton>
          <IconButton>
            <Twitter color="primary" />
          </IconButton>
          <IconButton>
            <Facebook color="primary" />
          </IconButton>
          <IconButton>
            <TravelExplore color="primary" />
          </IconButton>
        </Stack>
      </Container>
      <Container
        sx={{
          // background: "gray",
          display: "flex",
          justifyContent: "center",
          //   pt: 2,
        }}
      >
        <Typography variant="body2">&copy; 2024 made with cretaive.</Typography>
      </Container>
    </Box>
  );
};

export default Footer;

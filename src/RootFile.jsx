import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Box } from "@mui/material";

const RootFile = () => {
  return (
    <>
      <Header />
      <Box sx={{ mt: { xs: "64px", lg: "64px" } }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default RootFile;

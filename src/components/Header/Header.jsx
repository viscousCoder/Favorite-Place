/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import {
  Stack,
  Toolbar,
  Typography,
  Container,
  AppBar,
  Button,
  Drawer,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  useThemeProps,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/Theme";
import { DarkMode, LightMode } from "@mui/icons-material";
import { deepOrange } from "@mui/material/colors";
import logo from "../../assets/logo2.jpeg";
const pages = [
  { name: "Home", id: "home" },
  { name: "Places", id: "places" },
];

const NavList = ({ closeDrawer, ...props }) => {
  const navigate = useNavigate();
  const { isDark, toggleDarkMode, currentUser, setCurrentUser } = useTheme();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const curr = JSON.parse(localStorage.getItem("currentUser"));
  // const iconLogo = curr?.username?.splice(0, 1).toUpperCase();
  const iconLogo = curr?.username?.slice(0, 1).toUpperCase();

  // console.log(currentUser, "hii", curr);
  // const theme = useThemeProps();
  // console.log(theme, "is theme");

  function handleChange() {
    toggleDarkMode();
    setOpen(false);
    setAnchorEl(null);
  }
  function handleAvtarClick(e) {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    setAnchorEl(null);
  }
  useEffect(() => {
    setCurrentUser(localStorage.getItem("currentUser"));
  }, []);

  function handleLogout() {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    setOpen(false);
    navigate("/login");
    setAnchorEl(null);
  }

  // function handleNavigate() {}
  return (
    <Stack
      overflow="auto"
      direction={{ xs: "column", sm: "row" }}
      gap={3}
      ml={{ xs: 3, sm: 0 }}
      mt={{ xs: 3, sm: 0 }}
      width={{ xs: "150px", sm: "initial" }}
      {...props}
    >
      {pages.map((page) => (
        <Button
          key={page.id}
          sx={{
            color: { xs: "primary", sm: "white" },
          }}
          component={RouterLink}
          to={page.id === "home" ? "/" : `/${page.id}`}
          onClick={closeDrawer}
        >
          {page.name}
        </Button>
      ))}
      {!currentUser ? (
        <Button
          sx={{
            color: { xs: "primary", sm: "white" },
          }}
          component={RouterLink}
          to="/login"
          onClick={closeDrawer}
        >
          Login
        </Button>
      ) : (
        <Button onClick={handleAvtarClick}>
          <Avatar sx={{ bgcolor: deepOrange[500] }} alt="User Image">
            {iconLogo}
          </Avatar>
        </Button>
      )}
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleChange}>
          <Stack
            direction={"row"}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Typography sx={{ color: isDark ? "white" : "#1976d2" }}>
              {isDark ? "Light Mode" : "Dark Mode"}
            </Typography>
            <IconButton onClick={handleChange}>
              {!isDark ? (
                <DarkMode sx={{ color: isDark ? "white" : "#1976d2" }} />
              ) : (
                <LightMode sx={{ color: isDark ? "white" : "#1976d2" }} />
              )}
            </IconButton>
          </Stack>
        </MenuItem>
        <MenuItem
          onClick={handleLogout}
          sx={{ color: isDark ? "white" : "#1976d2" }}
        >
          {/* <Button disableRipple sx={{ color: isDark ? "white" : "#1976d2" }}>
            Logout
          </Button> */}
          Logout
        </MenuItem>
      </Menu>
    </Stack>
  );
};

const Nav = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="text"
        onClick={toggleDrawer(true)}
        sx={{
          color: "white",
          display: { xs: "flex", sm: "none" },
          left: "24px",
        }}
      >
        <MenuIcon />
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        sx={{
          display: { xs: "inherit", sm: "none" },
        }}
      >
        <NavList closeDrawer={closeDrawer} />{" "}
      </Drawer>
      <NavList
        sx={{
          display: { xs: "none", sm: "inherit" },
        }}
        closeDrawer={closeDrawer}
      />
    </>
  );
};

const Header = () => {
  return (
    <AppBar>
      <Container sx={{ maxWidth: { xs: "100%" }, p: 0 }}>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Avatar>
              <IconButton>
                <img src={logo} height={"55px"} width={"61px"} />
              </IconButton>
            </Avatar>
            {/* <Typography variant="h6">My App</Typography> */}
            <Nav />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

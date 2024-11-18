/* eslint-disable react/prop-types */

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./components/LandingPage/HomePage";
import RootFile from "./RootFile";
import PlacesList from "./components/Places/PlacesList";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useTheme } from "./context/Theme";
import SelectedPlaces from "./components/SelectedPlace/SelectedPlaces";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { checkAuthLoader } from "./utils/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootFile />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "places",
        element: <PlacesList />,
        loader: checkAuthLoader,
      },
      {
        path: "places/:id",
        element: <SelectedPlaces />,
        loader: checkAuthLoader,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
function App() {
  const { isDark } = useTheme();
  const appTheme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

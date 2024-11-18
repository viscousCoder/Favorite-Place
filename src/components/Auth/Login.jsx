import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import ImageLogin from "../../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTheme } from "../../context/Theme";

const LoginCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  maxWidth: 800,
  margin: "auto",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const LeftSection = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(4),
  textAlign: "center",
}));

const RightSection = styled(CardContent)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(4),
}));

export default function Login() {
  const { setCurrentUser } = useTheme();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Email validation using regex
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  // Handle email change and validation
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (value && !validateEmail(value)) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }
  };

  // Handle password change and validation
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length > 0 && (value.length < 6 || value.length > 15)) {
      setPasswordError("Password must be between 6 and 15 characters");
    } else {
      setPasswordError("");
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      setEmailError("Please fill the field");
    }
    if (password === "") {
      setPasswordError("Please fill the field");
    }

    if (email === "" || password === "") {
      return;
    }

    const currentUser = users?.find(
      (user) => user.email === email && user.password === password
    );
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      setCurrentUser(currentUser);
      navigate("/");
      toast.success("You login successfully");
    } else {
      console.log("Invalid credentails");
      toast.error("Invalid credentails");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: 2,
      }}
    >
      <LoginCard>
        <LeftSection>
          <img
            src={ImageLogin}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "400px",
            }}
          />
          <Typography variant="h4" sx={{ mb: 2 }}>
            Welcome to The Traveling World
          </Typography>
          <Typography variant="body1">Adventure awaits, go find it!</Typography>
        </LeftSection>

        {/* Right Section with Form */}
        <RightSection>
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={handleEmailChange}
              error={!!emailError} // Turns the input red if there is an error
              helperText={emailError} // Displays the error message below the input
              onFocus={() => setEmailError("")} // Remove error on focus
              sx={{
                marginBottom: 2,
              }}
            />

            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              margin="normal"
              value={password}
              onChange={handlePasswordChange}
              error={!!passwordError}
              helperText={passwordError}
              onFocus={() => setPasswordError("")}
              sx={{
                marginBottom: 2,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </form>
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography variant="body2">
              Not have an account?
              <Link to="/register" color="primary">
                Sign up!
              </Link>
            </Typography>
          </Box>
        </RightSection>
      </LoginCard>
    </Box>
  );
}

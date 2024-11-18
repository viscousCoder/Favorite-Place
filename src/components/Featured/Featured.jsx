import { Grid, Box, Typography } from "@mui/material";
import HotelIcon from "@mui/icons-material/Hotel"; // Replace with appropriate icons
import PoolIcon from "@mui/icons-material/Pool";
import WalletIcon from "@mui/icons-material/AccountBalanceWallet";

const FeatureSection = () => {
  const features = [
    {
      icon: <HotelIcon fontSize="large" />,
      title: "THE BEST LUXURY HOTELS",
      description:
        "From the latest trendy boutique hotel to the iconic palace with XXL pool, go for a mini-vacation just a few subway stops away from your home.",
    },
    {
      icon: <PoolIcon fontSize="large" />,
      title: "NEW EXPERIENCES",
      description:
        "Privatize a pool, take a Japanese bath or wake up in 900m² of garden... your Sundays will not be alike.",
    },
    {
      icon: <WalletIcon fontSize="large" />,
      title: "EXCLUSIVE RATES",
      description:
        "By registering, you will access specially negotiated rates that you will not find anywhere else.",
    },
  ];

  return (
    <Box>
      <Box sx={{ py: 8, px: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box textAlign="center">
                {feature.icon}
                <Typography variant="h6" fontWeight="bold" mt={2}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" mt={1}>
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default FeatureSection;

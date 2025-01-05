import { Grid, Box, Typography, Stack } from "@mui/material";
import Image from "../../../assets/travel.svg";
import { useTheme } from "../../../context/Theme";
/* eslint-disable react/prop-types */
const Description = ({ data }) => {
  const { isDark } = useTheme();
  console.log(data.details);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={9}>
        <Box
          sx={{
            height: "50vh",
            backgroundColor: !isDark ? "#f0f0f0" : "#777373",
            padding: 2,
          }}
        >
          <Typography variant="h5">{data?.title}</Typography>
          <Typography>
            {/* {data.details.des} */}
            <div dangerouslySetInnerHTML={{ __html: data.info }} />
          </Typography>
        </Box>
      </Grid>

      {/* Right Side - 25% Width */}
      <Grid item xs={12} md={3}>
        <Box
          sx={{
            height: "50vh",
            backgroundColor: !isDark ? "#f0f0f0" : "#777373",
            padding: 2,
          }}
        >
          <Typography variant="h5">Travels</Typography>
          <Stack direction={"column"} marginTop={4}>
            <Typography variant="h6">Hotels: {data.details.hotel}</Typography>
            <Typography variant="h6">
              Bus Stand: {data.details.busStand}
            </Typography>
            <Typography variant="h6">
              Railway Station: {data.details.railwayStation}
            </Typography>
          </Stack>
          <Box sx={{ mt: "43px" }}>
            <img src={Image} width="100%" />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Description;

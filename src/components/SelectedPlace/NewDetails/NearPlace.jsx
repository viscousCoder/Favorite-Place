/* eslint-disable react/prop-types */

import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Sample images for the landing page
const imageUrls = [
  "https://media.istockphoto.com/id/1438303240/photo/taj-mahal-in-agra-india-at-sunrise.webp?a=1&b=1&s=612x612&w=0&k=20&c=d9i06nWMQNUJEwu4eZFwngGQMlmO5PXE4doXWmv-lrM=", // First Image
  "https://media.istockphoto.com/id/2150163402/photo/the-candolim-beach-at-dusk-in-north-goa-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=qwiUa9IbMb4DfS__oVfvR76YSIEg1rTwYpgIPBmBnFE=", // Second Image
  "https://media.istockphoto.com/id/157647148/photo/young-woman-meditating-by-ganges-river-in-rishikesh.webp?a=1&b=1&s=612x612&w=0&k=20&c=z07QIkDBL-0ONJsJKr6OCagbZuJeqGS1cDci__3i16Y=", // Third Image
];

const NearPlaces = ({ data }) => {
  const theme = useTheme();

  return (
    <Container sx={{ width: "100%", p: { xs: 0, md: 0, lg: 0 }, mt: 5, mb: 5 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h3">Near By Places</Typography>
      </Box>
      <Grid container spacing={4} alignItems="center">
        {/* Image on left, Card on right on larger screens */}
        <Grid item xs={12} sm={6} md={6}>
          <CardMedia
            component="img"
            // image={imageUrls[0]}
            image={data?.nearbyPlaces[0]?.image}
            alt="Favorite Place 1"
            sx={{
              width: "100%",
              height: 300,
              objectFit: "cover",
              borderRadius: 2,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Card sx={{ padding: 2 }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                {data?.nearbyPlaces[0]?.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {data?.nearbyPlaces[0]?.des}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Section 2 (Text on Left, Image on Right) */}
      <Grid container spacing={4} alignItems="center">
        {/* Card on left, Image on right */}
        <Grid item xs={12} sm={6} md={6}>
          <Card sx={{ padding: 2 }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                {data?.nearbyPlaces[1]?.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {data?.nearbyPlaces[1]?.des}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <CardMedia
            component="img"
            image={data?.nearbyPlaces[1]?.image}
            alt="Favorite Place 2"
            sx={{
              width: "100%",
              height: 300,
              objectFit: "cover",
              borderRadius: 2,
            }}
          />
        </Grid>
      </Grid>

      {/* Section 3 (Image on Left, Text on Right) */}
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6} md={6}>
          <CardMedia
            component="img"
            image={data?.nearbyPlaces[2]?.image}
            alt="Favorite Place 3"
            sx={{
              width: "100%",
              height: 300,
              objectFit: "cover",
              borderRadius: 2,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Card sx={{ padding: 2 }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                {data?.nearbyPlaces[2]?.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {data?.nearbyPlaces[2]?.des}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NearPlaces;

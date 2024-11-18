// import {
//   Container,
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   CardMedia,
// } from "@mui/material";
// // import { useTheme } from "@mui/material/styles";

// // Sample images for the landing page
// const imageUrls = [
//   "https://via.placeholder.com/500", // First Image
//   "https://via.placeholder.com/500", // Second Image
//   "https://via.placeholder.com/500", // Third Image
// ];

// const LeftRight = () => {
//   //   const theme = useTheme();

//   return (
//     <Container>
//       <Grid container spacing={4}>
//         {/* First Section */}
//         <Grid item xs={12} sm={6} md={6}>
//           <Grid container direction="row" spacing={4}>
//             {/* Image on left, Card on right */}
//             <Grid item xs={12} sm={6}>
//               <CardMedia
//                 component="img"
//                 image={imageUrls[0]}
//                 alt="Favorite Place 1"
//                 sx={{
//                   width: "100%",
//                   height: 300,
//                   objectFit: "cover",
//                   borderRadius: 2,
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <Card sx={{ padding: 2 }}>
//                 <CardContent>
//                   <Typography variant="h5" component="h2" gutterBottom>
//                     Visit the Grand Canyon
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary">
//                     Experience the majestic beauty of the Grand Canyon. A place
//                     where the earth's layers meet the sky.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </Grid>

//         {/* Second Section */}
//         <Grid item xs={12} sm={6} md={6}>
//           <Grid container direction="row" spacing={4}>
//             {/* Image on right, Card on left */}
//             <Grid item xs={12} sm={6}>
//               <Card sx={{ padding: 2 }}>
//                 <CardContent>
//                   <Typography variant="h5" component="h2" gutterBottom>
//                     Explore the Maldives
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary">
//                     The Maldives is a tropical paradise known for its
//                     crystal-clear waters and white sandy beaches.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <CardMedia
//                 component="img"
//                 image={imageUrls[1]}
//                 alt="Favorite Place 2"
//                 sx={{
//                   width: "100%",
//                   height: 300,
//                   objectFit: "cover",
//                   borderRadius: 2,
//                 }}
//               />
//             </Grid>
//           </Grid>
//         </Grid>

//         {/* Third Section */}
//         <Grid item xs={12} sm={6} md={6}>
//           <Grid container direction="row" spacing={4}>
//             {/* Image on left, Card on right */}
//             <Grid item xs={12} sm={6}>
//               <CardMedia
//                 component="img"
//                 image={imageUrls[2]}
//                 alt="Favorite Place 3"
//                 sx={{
//                   width: "100%",
//                   height: 300,
//                   objectFit: "cover",
//                   borderRadius: 2,
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <Card sx={{ padding: 2 }}>
//                 <CardContent>
//                   <Typography variant="h5" component="h2" gutterBottom>
//                     Discover Kyoto, Japan
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary">
//                     Kyoto is famous for its historic temples, traditional wooden
//                     houses, and serene atmosphere.
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>

//       {/* Responsive Design: On smaller screens */}
//       <Grid container spacing={4} sx={{ display: { xs: "block", sm: "none" } }}>
//         {/* Mobile view: Image on top, Card below */}
//         <Grid item xs={12}>
//           <CardMedia
//             component="img"
//             image={imageUrls[0]}
//             alt="Favorite Place 1"
//             sx={{
//               width: "100%",
//               height: 300,
//               objectFit: "cover",
//               borderRadius: 2,
//             }}
//           />
//           <Card sx={{ padding: 2, marginTop: 2 }}>
//             <CardContent>
//               <Typography variant="h5" component="h2" gutterBottom>
//                 Visit the Grand Canyon
//               </Typography>
//               <Typography variant="body1" color="text.secondary">
//                 Experience the majestic beauty of the Grand Canyon. A place
//                 where the earth&apos;s layers meet the sky.
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         <Grid item xs={12}>
//           <CardMedia
//             component="img"
//             image={imageUrls[1]}
//             alt="Favorite Place 2"
//             sx={{
//               width: "100%",
//               height: 300,
//               objectFit: "cover",
//               borderRadius: 2,
//             }}
//           />
//           <Card sx={{ padding: 2, marginTop: 2 }}>
//             <CardContent>
//               <Typography variant="h5" component="h2" gutterBottom>
//                 Explore the Maldives
//               </Typography>
//               <Typography variant="body1" color="text.secondary">
//                 The Maldives is a tropical paradise known for its crystal-clear
//                 waters and white sandy beaches.
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         <Grid item xs={12}>
//           <CardMedia
//             component="img"
//             image={imageUrls[2]}
//             alt="Favorite Place 3"
//             sx={{
//               width: "100%",
//               height: 300,
//               objectFit: "cover",
//               borderRadius: 2,
//             }}
//           />
//           <Card sx={{ padding: 2, marginTop: 2 }}>
//             <CardContent>
//               <Typography variant="h5" component="h2" gutterBottom>
//                 Discover Kyoto, Japan
//               </Typography>
//               <Typography variant="body1" color="text.secondary">
//                 Kyoto is famous for its historic temples, traditional wooden
//                 houses, and serene atmosphere.
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default LeftRight;

import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Sample images for the landing page
const imageUrls = [
  "https://media.istockphoto.com/id/1438303240/photo/taj-mahal-in-agra-india-at-sunrise.webp?a=1&b=1&s=612x612&w=0&k=20&c=d9i06nWMQNUJEwu4eZFwngGQMlmO5PXE4doXWmv-lrM=", // First Image
  "https://media.istockphoto.com/id/2150163402/photo/the-candolim-beach-at-dusk-in-north-goa-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=qwiUa9IbMb4DfS__oVfvR76YSIEg1rTwYpgIPBmBnFE=", // Second Image
  "https://media.istockphoto.com/id/157647148/photo/young-woman-meditating-by-ganges-river-in-rishikesh.webp?a=1&b=1&s=612x612&w=0&k=20&c=z07QIkDBL-0ONJsJKr6OCagbZuJeqGS1cDci__3i16Y=", // Third Image
];

const LandingPage = () => {
  const theme = useTheme();

  return (
    <Container>
      {/* Section 1 */}
      <Grid container spacing={4} alignItems="center">
        {/* Image on left, Card on right on larger screens */}
        <Grid item xs={12} sm={6} md={6}>
          <CardMedia
            component="img"
            image={imageUrls[0]}
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
                Explore the Taj Mahal
              </Typography>
              <Typography variant="body1" color="text.secondary">
                The Taj Mahal, a symbol of eternal love, is one of India's most
                iconic monuments, attracting millions of visitors to Agra every
                year.
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
                Relax on the Beaches of Goa
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Known for its golden beaches, vibrant nightlife, and rich
                Portuguese heritage, Goa offers a perfect getaway for travelers
                seeking both adventure and relaxation.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <CardMedia
            component="img"
            image={imageUrls[1]}
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
        {/* Image on left, Card on right */}
        <Grid item xs={12} sm={6} md={6}>
          <CardMedia
            component="img"
            image={imageUrls[2]}
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
                Discover Rishikesh: The Yoga Capital
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Rishikesh, nestled in the foothills of the Himalayas, is known
                for its serene beauty, spiritual ambiance, and as a center for
                yoga and meditation.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;

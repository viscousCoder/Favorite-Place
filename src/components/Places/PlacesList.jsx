import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import "./PlacesList.css";

import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DUMMY_DATA = [
  {
    title: "Flower Of Valley",
    image:
      "https://i.pinimg.com/474x/77/c0/93/77c0936288cc58f0feb2fd79cf3bec61.jpg",
    description:
      "Valley of Flowers from Dehradun opens up in June for everyone till the first week of October. It brings forth the best monsoon beauty.",
  },
  {
    title: "Hawa Mahal",
    image:
      "https://i.pinimg.com/474x/4f/58/c1/4f58c145b6de432b0973728a6fd35a10.jpg",
    description:
      "The Hawa Mahal is a five-storey building, and it is the tallest building in the world that has been built without a foundation.",
  },
  {
    title: "Taj Mahal",
    image:
      "https://i.pinimg.com/474x/c8/57/73/c85773265ec89333d1035ede6be31d83.jpg",
    description:
      "The foundation stone of India Gate was laid by His Royal Highness, the Duke of Connaught in 1921 and it was designed by Edwin Lutyens.",
  },
  {
    title: "India Gate",
    image:
      "https://i.pinimg.com/474x/55/9a/48/559a4826e6a69b32c2dba25fa856f103.jpg",
    description:
      "Flower of valley is in Uttarakhand. It is famous for the variety of the flower that grow in the himalayns region.Aman",
  },
  {
    title: "Goa Beach",
    image:
      "https://i.pinimg.com/474x/86/68/80/8668802fed844bedaf7b1ebbc8edb8c3.jpg",
    description:
      "Goa is a state on the southwestern coast of India within the Konkan region, the Deccan highlands by the Western Ghats.",
  },

  {
    title: "Marine Drive",
    image:
      "https://i.pinimg.com/736x/96/de/cb/96decb9495048d332aefb84e3455715b.jpg",
    description:
      "Marine Drive in Mumbai, India is a 3.6 kilometer-long promenade and road that's known iconic landmarks, and upscale residential areas",
  },
  {
    title: "Ganga Ghat",
    image:
      "https://i.pinimg.com/474x/97/d6/a9/97d6a9440c2db772094e3f75a4cda36b.jpg",
    description:
      "Most Varanasi ghats were rebuilt after 1700 AD, when the city was part of Maratha Empire Shindes (Scindias)",
  },
  {
    title: "Rudranath",
    image:
      "https://i.pinimg.com/736x/ee/29/2d/ee292d5cb9375ea0f7a224c029f15506.jpg",
    description:
      "Rudranath Temple is a temple of Lord Shiva situated in Chamoli district of Uttarakhand state of India",
  },
];

const PlacesList = () => {
  const [userPlace, setUserPlaces] = useState("");
  const navigate = useNavigate();
  function handleChange(e) {
    setUserPlaces(e.target.value);
  }
  function handleClick(head) {
    const title = head.toLowerCase();
    navigate(`${title}`);
  }
  return (
    <Container
      sx={{
        minHeight: "100vh",
        mt: 10,
        pl: 2,
        maxWidth: "100%",
        mb: 10,
      }}
    >
      <Stack
        direction={"row"}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="h6" sx={{ pl: 2 }}>
          Places you should visit
        </Typography>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            height: "32px",
          }}
        >
          <InputBase
            value={userPlace}
            onChange={handleChange}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search the places"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Stack>
      <Box sx={{ mt: 3 }}>
        <Grid
          container
          spacing={3}
          sx={{ pl: 0, display: "flex", justifyContent: "center" }}
        >
          {userPlace === ""
            ? DUMMY_DATA.map((data, index) => (
                <Grid item key={index} sx={{ pl: 1 }}>
                  <Card sx={{ maxWidth: 350, height: 381 }}>
                    {/* <Button> */}
                    <CardActionArea onClick={() => handleClick(data.title)}>
                      <CardMedia
                        component="img"
                        image={data.image}
                        alt={data.title}
                        sx={{
                          width: "100%",
                          height: 250, // Increased height for the image area
                          objectFit: "contain", // Ensures the entire image fits
                        }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {data.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          {data.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    {/* </Button> */}
                  </Card>
                </Grid>
              ))
            : DUMMY_DATA.filter((data) =>
                data.description.toLowerCase().includes(userPlace.toLowerCase())
              ).map((data, index) => (
                <Grid item key={index}>
                  <Card sx={{ maxWidth: 350, height: 450 }}>
                    <CardActionArea onClick={() => handleClick(data.title)}>
                      <CardMedia
                        component="img"
                        image={data.image}
                        alt={data.title}
                        sx={{
                          width: "100%",
                          height: 250, // Increased height for the image area
                          objectFit: "contain", // Ensures the entire image fits
                        }}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {data.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "text.secondary" }}
                        >
                          {data.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default PlacesList;

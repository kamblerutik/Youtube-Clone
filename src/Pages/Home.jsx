import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import Videos from "../Components/Videos";
import axios from "axios";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const API_URL = `https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${selectedCategory}`;
  // console.log(selectedCategory);
  const options = {
    method: "GET",
    url: API_URL,
    params: {
      maxResults: "50",
    },
    headers: {
      "x-rapidapi-key": "2c4fe48bdamshb5d9aee6c8ee203p1c819ajsn935b75530317",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };

  const fetchAPI = async () => {
    const { data } = await axios.request(options);
    return data;
  };
  useEffect(() => {
    fetchAPI().then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: { sm: "row", xs: "column" },
      }}
    >
      <Box
        sx={{
          height: { sm: "92vh", xs: "auto" },
          px: { xs: "0px", sm: "2rem" },
          backgroundColor: "#fff",
          paddingTop: "1rem",
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography color="#000" bgcolor={"#fff"} variant="body2">
          Copyright 2024 Rutya
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "90vh",
        }}
      >
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Home;

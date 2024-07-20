import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Videos from "../Components/Videos";
import { useParams } from "react-router-dom";

const Search = () => {
  const [videos, setVideos] = useState([]);
  const { search } = useParams();
  const API_URL = `https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${search}`;
  // console.log();
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
      // console.log(data);
    });
  }, [search]);

  return (
    <Box
      p={2}
      sx={{
        overflowY: "auto",
        height: "90vh",
        borderTop: "1px solid #3d3d3d",
        borderLeft: "1px solid #3d3d3d",
      }}
    >
      <Videos videos={videos} />
    </Box>
  );
};

export default Search;

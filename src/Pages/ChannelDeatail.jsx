import { Box, CardMedia, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChannelCard from "../Components/ChannelCard";
import Videos from "../Components/Videos";

const ChannelDeatail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState();
  const [video, setVideo] = useState([]);

  const API_URL_Channel = `https://youtube-v31.p.rapidapi.com/channels?part=snippet&id=${id}`;
  // const API_URL_Video = `https://youtube-v31.p.rapidapi.com/search?channelId=${id}&partsnippet&order=date`;

  const optionsChannel = {
    method: "GET",
    url: API_URL_Channel,
    params: {
      maxResults: "50",
    },
    headers: {
      "x-rapidapi-key": "2c4fe48bdamshb5d9aee6c8ee203p1c819ajsn935b75530317",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };
  const optionsVideo = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      channelId: id,
      part: "snippet,id",
      order: "date",
      maxResults: "50",
    },
    headers: {
      "x-rapidapi-key": "2c4fe48bdamshb5d9aee6c8ee203p1c819ajsn935b75530317",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };
  const fetchChannelDetails = async () => {
    const { data } = await axios.request(optionsChannel);
    return data;
  };
  const fetchVideo = async () => {
    const { data } = await axios.request(optionsVideo);
    return data;
  };

  // console.log(about);

  useEffect(() => {
    fetchChannelDetails().then((data) => {
      setChannelDetail(data?.items[0]);
    });
    fetchVideo().then((data) => {
      setVideo(data?.items);
    });
  }, [id]);
  return (
    <Box minHeight={"89vh"}>
      <Box>
        <CardMedia
          image={
            channelDetail?.brandingSettings?.image?.bannerExternalUrl || "Image"
          }
          alt={channelDetail?.snippet?.title}
          sx={{
            // width: "180px",
            height: "300px",
            marginBottom: "1rem",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop={"-155px"} />
      </Box>
      <Box>
        <Box
          sx={{
            mr: { sm: "100px" },
            width: "100%",
            paddingLeft: { xs: "0px", sm: "10rem" },
          }}
        >
          <Videos videos={video} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDeatail;

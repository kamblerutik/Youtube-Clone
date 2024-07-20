import { Box, Stack } from "@mui/material";
import React from "react";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";
import Seklton from "./Seklton";

const Videos = ({ videos }) => {
  //   console.log(videos);

  if (!videos?.length) return <Seklton />;

  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={3}
      padding={"1rem"}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {item.id.videoId && <VideoCard video={item} leftsm={"7rem"} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;

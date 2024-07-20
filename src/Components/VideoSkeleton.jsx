import { Skeleton, Stack } from "@mui/material";
import React from "react";

const VideoSkeleton = () => {
  return (
    <>
      <Stack width={"100%"} height={"500px"}>
        <Skeleton variant="rectangular" width={"100%"} height={"470px"} />
        <Skeleton variant="text" width={"70%"} height={"20px"} />
      </Stack>
    </>
  );
};

export default VideoSkeleton;

import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constant";
import { CheckCircle } from "@mui/icons-material";

const ChannelCard = ({ channelDetail, marginTop, leftsm }) => {
  // console.log(channelDetail);
  return (
    <Box
      sx={{
        borderRadius: "20px",
        // border: "1px solid red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "100%", sm: "320px" },
        height: "350px",
        margin: "auto",
        marginTop,
        position: "relative",
        left: { xs: "1rem", sm: leftsm },
      }}
    >
      <Link
        style={{ textDecoration: "none" }}
        to={`/channel/${channelDetail?.id?.channelId}`}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{
              borderRadius: "50%",
              width: "180px",
              height: "180px",
              marginBottom: "1rem",
              border: "5px solid #fff",
            }}
          />
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
              color: "#000",
            }}
            variant="h6"
          >
            {channelDetail?.snippet?.title} <CheckCircle fontSize="12px" />
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;

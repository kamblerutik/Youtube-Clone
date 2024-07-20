import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoProfilePicture,
  demoVideoUrl,
} from "../utils/constant";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        borderRadius: "0px",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            height: "180px",
            width: {
              xs: "100%",
              sm: "360px",
              md: "320px",
            },
          }}
        />
      </Link>
      <CardContent
        sx={{
          background: "#1e1e1e",
          height: "100px",
        }}
      >
        <Link
          style={{ textDecoration: "none" }}
          to={videoId ? `/video/${videoId}` : demoVideoUrl}
        >
          <Typography variant="subtitle1" color="#fff" fontWeight={"bold"}>
            {snippet?.title.slice(0, 60) || demoChannelTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <CardMedia
            image={snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={snippet?.title}
            sx={{
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              marginBottom: "1rem",
            }}
          />
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "ceneter",
              gap: "0.3rem",
              marginBottom: "0.8rem",
            }}
            variant="subtitle2"
            color="grey"
            fontWeight={"bold"}
          >
            {snippet?.channelTitle}
            <CheckCircle fontSize="12px" />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;

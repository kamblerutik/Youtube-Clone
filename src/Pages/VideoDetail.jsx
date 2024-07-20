import { CheckCircle, RemoveRedEye, ThumbUp } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useNavigate, useParams } from "react-router-dom";
import Videos from "../Components/Videos";
import VideoSkeleton from "../Components/VideoSkeleton";
import CommenBox from "../Components/CommenBox";

const VideoDetail = () => {
  const navigate = useNavigate("");
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [comments, setComments] = useState(null);
  const API_URL = `https://youtube-v31.p.rapidapi.com/videos?part=snippet,statistics&id=${id}`;
  const videosRL = `https://youtube-v31.p.rapidapi.com/search?part=snippet&relatedToVideoId=${id}&type=video`;
  // console.log(selectedCategory);
  const options = {
    method: "GET",
    url: API_URL,
    params: {
      part: "contentDetails,snippet,statistics",
      id: id,
    },
    headers: {
      "x-rapidapi-key": "2c4fe48bdamshb5d9aee6c8ee203p1c819ajsn935b75530317",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };

  const VideoComent = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/commentThreads",
    params: {
      part: "snippet",
      videoId: id,
      maxResults: "100",
    },
    headers: {
      "x-rapidapi-key": "2c4fe48bdamshb5d9aee6c8ee203p1c819ajsn935b75530317",
      "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
    },
  };

  const videoRelated = {
    method: "GET",
    url: videosRL,
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

  const fetchVideo = async () => {
    const { data } = await axios.request(videoRelated);
    return data;
  };

  const fetchComment = async () => {
    const { data } = await axios.request(VideoComent);
    return data;
  };

  useEffect(() => {
    fetchAPI().then((data) => {
      setDetail(data.items[0]);
    });
    fetchVideo().then((data) => {
      setVideos(data.items);
    });
    fetchComment().then((data) => {
      setComments(data.items);
    });
  }, [id]);

  if (!detail?.snippet) return <VideoSkeleton />;

  const {
    snippet: { title, channelTitle, channelId },
    statistics: { likeCount, viewCount },
  } = detail;

  // console.log(detail);

  return (
    <Box minHeight={"89vh"}>
      <Stack direction={{ xs: "column", sm: "row" }}>
        <Box flex={1}>
          <Box width={"100%"} position={"sticky"} top={"90px"}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              width={"100%"}
              height={"500px"}
              style={{
                margin: "auto",
              }}
            />
            <Typography
              variant="h5"
              sx={{
                color: "#fff",
                padding: "1rem",
                fontWeight: "bold",
              }}
            >
              {title}
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              sx={{
                color: "#000",
              }}
              py={1}
              px={2}
            >
              {/* <img alt="" srcset="" /> */}
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  textTransform: "none",
                }}
                onClick={() => navigate(`/channel/${channelId}`)}
              >
                {channelTitle}
                <CheckCircle
                  sx={{
                    color: "grey",
                  }}
                />
              </Button>
              <Stack direction={"row"} gap={"2rem"}>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: { xs: "0.7rem" },
                  }}
                >
                  <RemoveRedEye sx={{ color: "grey" }} />{" "}
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    fontSize: { xs: "0.7rem" },
                  }}
                >
                  <ThumbUp sx={{ color: "grey" }} />{" "}
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
      <CommenBox comments={comments} />
      <Box
        px={1}
        py={{ sm: 1, xs: 5 }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default VideoDetail;

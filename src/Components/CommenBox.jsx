import { Box, CardMedia, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CommenBox = ({ comments }) => {
  if (!comments) return "Loading";

  //   console.log(comments);

  return (
    <Stack
      sx={{
        height: "500px",
        top: "2.5rem",
        position: "relative",
        width: "100%",
        display: "flex",
        marginBottom: "5rem",
      }}
    >
      <Box
        sx={{
          background: "#f1f1f1",
          width: { sm: "70%", xs: "90%" },
          height: "550px",
          overflow: "auto",
          margin: "auto",
          borderRadius: "30px",
        }}
      >
        {comments.map((comment, index) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              background: "#dfdfdf",
              paddingLeft: "2rem",
              margin: "2rem",
              borderRadius: "55px",
              overflowX: "auto",
            }}
          >
            <Link
              to={`/channel/${comment?.snippet?.topLevelComment?.snippet?.authorChannelId?.value}`}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "#000",
              }}
            >
              <IconButton>
                <CardMedia
                  image={
                    comment?.snippet?.topLevelComment?.snippet
                      ?.authorProfileImageUrl
                  }
                  alt="Logo"
                  sx={{
                    width: { sm: "50px", xs: "30px" },
                    height: { sm: "50px", xs: "30px" },
                    borderRadius: "50%",
                  }}
                />
              </IconButton>
              <Typography
                sx={{
                  fontSize: { xs: "0.8rem" },
                }}
              >
                {comment?.snippet?.topLevelComment?.snippet?.authorDisplayName}
              </Typography>
            </Link>
            <Box
              sx={{
                paddingLeft: { sm: "4rem", xs: "1rem" },
                padding: { sm: "0px", xs: "1rem" },
              }}
            >
              <Typography
                sx={{
                  overflow: "auto",
                }}
              >
                {comment?.snippet?.topLevelComment?.snippet?.textDisplay}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default CommenBox;

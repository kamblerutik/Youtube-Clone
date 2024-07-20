import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import NotFoundImage from "../assets/NotFound.png";

const NotFound = () => {
  return (
    <Stack height={"85vh"}>
      <Paper
        sx={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "relative",
          width: "500px",
          height: "300px",
          padding: "1rem",
          background: "#151515",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={NotFoundImage}
          style={{
            width: "90%",
            height: "90%",
          }}
        />
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Typography color={"white"}>Back To Home </Typography>
        </Link>
      </Paper>
    </Stack>
  );
};

export default NotFound;

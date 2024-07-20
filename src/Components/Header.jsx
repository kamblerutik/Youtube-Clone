import { Tv } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        sx={{
          backgroundColor: "#fff",
          position: "sticky",
          justifyContent: "space-between",
          padding: { xs: "5px", sm: "1rem" },
          color: "#fff",
        }}
      >
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton>
              <img
                src={Logo}
                alt="logo"
                style={{ width: "50px", height: "50px" }}
              />
            </IconButton>
            <Typography
              sx={{
                fontSize: { xs: "0.8rem" },
              }}
              color={"#000"}
            >
              JRTS Tube
            </Typography>
          </Box>
        </Link>
        <SearchBar />
      </Stack>
    </>
  );
};

export default Header;

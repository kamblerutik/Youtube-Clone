import { Box, Typography } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import ChannelDetail from "./Pages/ChannelDeatail";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Search from "./Pages/Search";
import VideoDetail from "./Pages/VideoDetail";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Box
          sx={{
            backgroundColor: "#fff",
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Typography>Rutik Kambles</Typography>
        </Box>
      </BrowserRouter>
    </>
  );
};

export default App;

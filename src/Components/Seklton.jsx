import { Box, Skeleton, Stack } from "@mui/material";
import React from "react";

const Seklton = () => {
  return (
    <Stack>
      <Box
        sx={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: { sm: "repeat(3, 1fr)", xs: "repeat(1, 1fr)" },
          padding: "2rem",
        }}
      >
        <Skeleton
          variant="rectangular"
          sx={{
            width: { xs: "100%", sm: "358px", md: "320px" },
            height: "220px",
          }}
        />
        <Skeleton
          variant="rectangular"
          sx={{
            width: { xs: "100%", sm: "358px", md: "320px" },
            height: "220px",
          }}
        />
        <Skeleton
          variant="rectangular"
          sx={{
            width: { xs: "100%", sm: "358px", md: "320px" },
            height: "220px",
          }}
        />
        <Skeleton
          variant="rectangular"
          sx={{
            width: { xs: "100%", sm: "358px", md: "320px" },
            height: "220px",
          }}
        />
        <Skeleton
          variant="rectangular"
          sx={{
            width: { xs: "100%", sm: "358px", md: "320px" },
            height: "220px",
          }}
        />
        <Skeleton
          variant="rectangular"
          sx={{
            width: { xs: "100%", sm: "358px", md: "320px" },
            height: "220px",
          }}
        />
        <Skeleton
          variant="rectangular"
          sx={{
            width: { xs: "100%", sm: "358px", md: "320px" },
            height: "220px",
          }}
        />
        <Skeleton
          variant="rectangular"
          sx={{
            width: { xs: "100%", sm: "358px", md: "320px" },
            height: "220px",
          }}
        />
        <Skeleton
          variant="rectangular"
          sx={{
            width: { xs: "100%", sm: "358px", md: "320px" },
            height: "220px",
          }}
        />
      </Box>
    </Stack>
  );
};

export default Seklton;

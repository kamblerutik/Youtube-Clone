import { Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { categories } from "../utils/constant";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  // const selectedCategory = "New";
  return (
    <Stack
      sx={{
        overflowY: "auto",
        height: { xs: "auto", sm: "95%" },
        flexDirection: { xs: "flex", sm: "column" },
        gap: { sm: "0.5rem", xs: "1rem" },
        background: "#fff",
        alignItems: "center",
      }}
      direction={"row"}
    >
      {categories.map((category) => (
        <Button
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
          sx={{
            backgroundColor: category.name === selectedCategory && "#606060",
            fontSize: category.name === selectedCategory && "1.5rem",
            color: "#000",
            borderRadius: "30px",
            paddingLeft: { xs: "5rem", sm: "1rem" },
            paddingRight: { xs: "5rem", sm: "1rem" },
          }}
        >
          <IconButton
            sx={{
              color: category.name === selectedCategory ? "#fff" : "#000",
            }}
          >
            {category.icon}
          </IconButton>
          <Typography
            sx={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </Typography>
        </Button>
      ))}
    </Stack>
  );
};

export default SideBar;

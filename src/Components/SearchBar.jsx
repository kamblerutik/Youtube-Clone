import { Search } from "@mui/icons-material";
import { IconButton, InputBase, Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search) {
      navigate(`/search/${search}`);
      setSearch("");
    }
  };

  return (
    <Paper
      component={"form"}
      onSubmit={handleSubmit}
      sx={{
        borderRadius: "30px",
        paddingLeft: "1rem",
        display: "flex",
        alignItems: "center",
        width: { xs: "250px", sm: "450px" },
        height: { xs: "30px", sm: "40px" },
      }}
    >
      <InputBase
        fullWidth
        placeholder="Search here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{
          color: "#000",
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;

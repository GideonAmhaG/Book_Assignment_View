import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className={styles.searchBarContainer}>
      <TextField
        label="Search Books"
        variant="standard"
        value={searchTerm}
        onChange={handleChange}
        className={styles.searchBar}
      />
    </div>
  );
};

export default SearchBar;

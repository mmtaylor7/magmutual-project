import "../navBar/NavBarStyles.css";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const NavBar = () => {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Search By:</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="byUser" control={<Radio />} label="User" />
        <FormControlLabel value="byDate" control={<Radio />} label="Date" />
        <FormControlLabel
          value="byProfession"
          control={<Radio />}
          label="Profession"
        />
        <FormControlLabel
          value="byLocation"
          control={<Radio />}
          label="Location"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default NavBar;

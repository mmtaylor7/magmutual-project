import "../navBar/NavBarStyles.css";
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

type NavBarProps = {};

const NavBar = (props: NavBarProps) => {
  const onRadioButtonClick = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    switch (value) {
      case "byUser":
        console.log("search by user");
        break;
      case "byDate":
        console.log("search by date");
        break;
      case "byLocation":
        console.log("search by location");
        break;
      case "byProfession":
        console.log("search by profession");
        break;
      default:
        console.log(`Sorry`);
    }
  };

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" className="searchBy">
        Search By:
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={onRadioButtonClick}
      >
        <FormControlLabel
          value="byUser"
          control={<Radio />}
          label="User"
          className="radioFont"
        />
        <FormControlLabel
          value="byDate"
          control={<Radio />}
          label="Date"
          className="radioFont"
        />
        <FormControlLabel
          value="byProfession"
          control={<Radio />}
          label="Profession"
          className="radioFont"
        />
        <FormControlLabel
          value="byLocation"
          control={<Radio />}
          label="Location"
          className="radioFont"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default NavBar;

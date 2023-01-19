import "../navBar/NavBarStyles.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

type NavBarProps = {
  setSubmitClicked: (newValue: boolean) => void;
  setUsers: any;
};

const NavBar = (props: NavBarProps) => {
  const [radioButtonValue, setRadioButtonValue] = useState("");

  const navigate = useNavigate();

  // run once on page load
  useEffect(() => {
    let radioButtonValue = window.location.pathname.substring(1);
    setRadioButtonValue(radioButtonValue);
  }, []);

  const onRadioButtonClick = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    props.setSubmitClicked(false);
    props.setUsers([]);
    switch (value) {
      case "byUser":
        setRadioButtonValue("byUser");
        navigate("/byUser");
        break;
      case "byDate":
        setRadioButtonValue("byDate");
        navigate("/byDate");
        break;
      case "byLocation":
        setRadioButtonValue("byLocation");
        navigate("/byLocation");
        break;

      case "byProfession":
        setRadioButtonValue("byProfession");
        navigate("/byProfession");
        break;
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
        value={radioButtonValue}
      >
        <FormControlLabel
          value="byUser"
          control={<Radio />}
          label={<Typography fontSize="30px">User</Typography>}
        />
        <FormControlLabel
          value="byDate"
          control={<Radio />}
          label={<Typography fontSize="30px">Date</Typography>}
        />
        <FormControlLabel
          value="byProfession"
          control={<Radio />}
          label={<Typography fontSize="30px">Profession</Typography>}
        />
        <FormControlLabel
          value="byLocation"
          control={<Radio />}
          label={<Typography fontSize="30px">Location</Typography>}
        />
      </RadioGroup>
    </FormControl>
  );
};

export default NavBar;

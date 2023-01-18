import "../navBar/NavBarStyles.css";
import React from "react";
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
  const navigate = useNavigate();
  const onRadioButtonClick = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    props.setSubmitClicked(false);
    props.setUsers([]);
    switch (value) {
      case "byUser":
        navigate("/byUser");
        break;
      case "byDate":
        navigate("/byDate");
        break;
      case "byLocation":
        navigate("/byLocation");
        break;

      case "byProfession":
        navigate("/byProfession");
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

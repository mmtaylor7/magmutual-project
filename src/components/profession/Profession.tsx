import "./ProfessionStyles.css";
import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type ProfessionProps = {
  setUsers: any;
  setSubmitClicked: (newValue: boolean) => void;
};

const Profession = (props: ProfessionProps) => {
  let profession = "";

  const searchByProfession = async () => {
    const response = await fetch(
      "https://magmutual-project.herokuapp.com/getByProfession/" + profession
    );
    const users = await response.json();
    props.setUsers(users);

    props.setSubmitClicked(true);
  };

  const onTextFieldChange = (event: any) => {
    profession = event.target.value;
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-basic"
          label="Search by Profession"
          variant="filled"
          onChange={onTextFieldChange}
          style={{
            backgroundColor: "white",
          }}
        />
      </Box>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#2196f3",
          maxWidth: "100px",
          maxHeight: "40px",
          minWidth: "100px",
          minHeight: "40px",
          fontSize: "20px",
          marginTop: "10px",
        }}
        onClick={searchByProfession}
      >
        Search
      </Button>
    </Stack>
  );
};

export default Profession;

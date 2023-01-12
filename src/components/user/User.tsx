import "../user/UserStyles.css";
import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const User = () => {
  const searchByLastName = async () => {
    const response = await fetch(
      "https://magmutual-project.herokuapp.com/getByLastName/Roarke"
    );
    const user = await response.json();
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
          label="Search by Last Name"
          variant="filled"
          style={{ backgroundColor: "white" }}
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
        onClick={searchByLastName}
      >
        Search
      </Button>
    </Stack>
  );
};

export default User;

import "../date/DateStyles.css";
import React, { useState } from "react";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Date = () => {
  const [startValue, setStartValue] = useState<Dayjs | null>(null);
  const [endValue, setEndValue] = useState<Dayjs | null>(null);

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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Start Date"
          value={startValue}
          onChange={(newValue) => {
            setStartValue(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} style={{ backgroundColor: "white" }} />
          )}
        />
        <DatePicker
          label="End Date"
          value={endValue}
          onChange={(newValue) => {
            setEndValue(newValue);
          }}
          renderInput={(params) => (
            <TextField {...params} style={{ backgroundColor: "white" }} />
          )}
        />
      </LocalizationProvider>
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
      >
        Search
      </Button>
    </Stack>
  );
};

export default Date;

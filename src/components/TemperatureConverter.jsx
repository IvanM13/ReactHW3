import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const celsiusToFahrenheit = (celsius) => ((celsius * 9) / 5 + 32).toFixed(2);
  const fahrenheitToCelsius = (fahrenheit) => (((fahrenheit - 32) * 5) / 9).toFixed(2);

  const handleCelsiusChange = (e) => {
    setCelsius(e.target.value);
    setFahrenheit(celsiusToFahrenheit(e.target.value));
  };

  const handleFahrenheitChange = (e) => {
    setFahrenheit(e.target.value);
    setCelsius(fahrenheitToCelsius(e.target.value));
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "15ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onInput={handleCelsiusChange}
          value={celsius}
          id="outlined-basic"
          label="Температура в Цельсиях"
          variant="outlined"
        />
        <TextField
          onInput={handleFahrenheitChange}
          value={fahrenheit}
          id="filled-basic"
          label="Температура в Фаренгейтах"
          variant="filled"
        />
        <BootstrapButton
          onClick={() => {
            setCelsius("");
            setFahrenheit("");
          }}
          variant="contained"
          size="large"
        >
          Очистить
        </BootstrapButton>
      </Box>
    </div>
  );
}
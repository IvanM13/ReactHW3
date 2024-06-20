import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[900]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));


const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!currentTodo.trim()) return;
    setTodos([...todos, currentTodo]);
    setCurrentTodo("");
  };
  const deleteTask = (index) => {
    setTodos(todos.filter((currentTodo, i) => i !== index));
    setCurrentTodo("");
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={(e) => setCurrentTodo(e.target.value)}
          value={currentTodo}
          id="outlined-basic"
          label="Задача:"
          variant="outlined"
        />

        <ColorButton onClick={addTask} variant="contained">
          Добавить
        </ColorButton>
      </Box>
      {todos.map((task, i) => (
        <Card key={i} variant="outlined" style={{ marginTop: "1rem" }}>
          <CardContent>
            <Typography>{task}</Typography>
            <IconButton onClick={() => deleteTask(i)} aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default ToDoList;
import React, { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";

export const AddList = (props) => {
  const { list, setList } = props;

  const [title, setTitle] = useState("");

  const addTaskHandler = () => {
    console.log("add", list);

    setList([{ title, id: crypto.randomUUID(), completed: false }, ...list]);
    setTitle("");
  };

  return (
    <Stack direction={"row"} spacing={2} mb={2}>
      <TextField
        fullWidth
        sx={{ width: "80%" }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter your task..."
      />
      <Button
        variant="contained"
        sx={{ width: "20%" }}
        disableElevation
        onClick={addTaskHandler}
      >
        Add Task
      </Button>
    </Stack>
  );
};

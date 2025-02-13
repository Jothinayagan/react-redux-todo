import React, { useEffect, useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/slice/todo.slice";
import { useLazyGetTestDataQuery } from "../store/api";

export const AddList = () => {
  const dispatch = useDispatch();

  const [getData] = useLazyGetTestDataQuery();

  const getTestData = async () => {
    try {
      const result = await getData();
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  const [title, setTitle] = useState("");

  const addTaskHandler = () => {
    // setList([{ title, id: crypto.randomUUID(), completed: false }, ...list]);
    dispatch(addTodo({ title, id: crypto.randomUUID(), completed: false }));
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
        // onClick={addTaskHandler}
        onClick={getTestData}
      >
        Add Task
      </Button>
    </Stack>
  );
};

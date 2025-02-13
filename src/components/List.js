import React from "react";
import { Delete } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../store/slice/todo.slice";

export const List = () => {
  const dispatch = useDispatch();

  const todoList = useSelector(state => state.todos);
  console.log(todoList);

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
    // const copyList = [...list];
    // copyList[index].completed = !copyList[index].completed;
    // setList(copyList);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
    // const copyList = [...list];
    // copyList.splice(index, 1);
    // setList(copyList);
  };

  return (
    <Box bgcolor={"lightgray"} borderColor={"gray"} borderRadius={2}>
      {todoList?.length ? (
        todoList?.map((value, index) => (
          <ListItem
            key={value?.id}
            disablePadding
            secondaryAction={
              <IconButton onClick={() => handleDelete(value?.id)}>
                <Delete color="error" />
              </IconButton>
            }
          >
            <ListItemButton
              role={undefined}
              onClick={() => handleToggle(value?.id)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={value.completed ?? false}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant="h6"
                    sx={{
                      textDecorationLine: value.completed ? "line-through" : "",
                    }}
                  >
                    {value?.title}
                  </Typography>
                }

              />
            </ListItemButton>
          </ListItem>
        ))
      ) : (
        <Stack padding={3} direction={"row"} justifyContent={"center"}>
          <Typography variant="h6" sx={{ color: "GrayText" }}>
            No task available at the moment
          </Typography>
        </Stack>
      )}
    </Box>

  );
};

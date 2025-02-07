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

export const List = (props) => {
  const { list, setList } = props;

  const handleToggle = (index) => {
    const copyList = [...list];
    copyList[index].completed = !copyList[index].completed;
    setList(copyList);
  };

  const handleDelete = (index) => {
    const copyList = [...list];
    copyList.splice(index, 1);
    setList(copyList);
  };

  return (
    <Box bgcolor={"lightgray"} borderColor={"gray"} borderRadius={2}>
      {list.length ? (
        list?.map((value, index) => (
          <ListItem
            key={value?.id}
            disablePadding
            secondaryAction={
              <IconButton onClick={() => handleDelete(index)}>
                <Delete color="error" />
              </IconButton>
            }
          >
            <ListItemButton
              role={undefined}
              onClick={() => handleToggle(index)}
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
                secondary={
                  <Typography
                    variant="body2"
                    sx={{
                      textDecorationLine: value.completed ? "line-through" : "",
                    }}
                  >
                    secondary text
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

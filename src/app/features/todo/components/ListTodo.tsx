import { FC } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  Box,
  IconButton,
  Icon,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectAllTodos } from "../reducers";
import { Todo } from "../domain";
import { useDispatch } from "react-redux";
import { todoDeleted, todoSelected } from "../actions/todo.actions";

export type ListItemTodoProps = {
  todo: Todo;
};
const ListItemTodo: FC<ListItemTodoProps> = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton
            edge="end"
            arial-aria-label="Delete"
            onClick={() => {
              dispatch(
                todoDeleted({
                  todo: todo,
                })
              );
            }}
          >
            <Delete />
          </IconButton>
          <IconButton
            edge="end"
            arial-aria-label="edit"
            onClick={() => {
              dispatch(
                todoSelected({
                  todo: todo,
                })
              );
            }}
          >
            <Edit />
          </IconButton>
        </>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <Checkbox edge="start" checked={todo.isCheked} />
        </ListItemIcon>
        <ListItemText>{todo.name}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export type ListTodoProps = {};

const ListTodo: FC<ListTodoProps> = ({}) => {
  const todos = useSelector(selectAllTodos);

  return (
    <Box textAlign={"left"}>
      <Typography
        component={"h3"}
        sx={{
          fontWeight: "fontWeightBold",
        }}
      >
        All todos:
      </Typography>

      <List>
        {(todos ?? []).map((todo) => (
          <ListItemTodo todo={todo} key={todo.id} />
        ))}
      </List>
    </Box>
  );
};
export default ListTodo;

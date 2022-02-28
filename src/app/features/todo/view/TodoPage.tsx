import { FC, useEffect } from "react";
import { BaseLayout } from "@leo/app/components/layout";
import CreateTodo from "../components/CreateTodo";
import ListTodo from "../components/ListTodo";
import { Grid } from "@mui/material";
import { listTodos } from "../actions/todo.actions";
import { useDispatch } from "react-redux";
export type TodoPageProps = {};

export const TodoPage: FC<TodoPageProps> = ({}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listTodos());
  }, []);
  return (
    <BaseLayout title="Todo Page">
      <Grid>
        <Grid container>
          <Grid item xs={5}>
            <CreateTodo />
          </Grid>
          <Grid item xs={4}>
            <ListTodo />
          </Grid>
        </Grid>
      </Grid>
    </BaseLayout>
  );
};

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Stack,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { FC, useEffect } from "react";
import { CreateTodoSchema } from "../domain/schema";
import { todoAdded, todoEdited } from "../actions/todo.actions";
import { getSelectedTodo } from "../reducers";
import { useDispatch, useSelector } from "react-redux";
export type CreatTodoProps = {};

const CreateTodo: FC<CreatTodoProps> = ({}) => {
  const dispatch = useDispatch();
  const todoSelected = useSelector(getSelectedTodo);
  const isEdit = todoSelected != null;

  const formik = useFormik<CreateTodoSchema>({
    initialValues: {
      checked: false,
      name: "",
    },
    onSubmit: (values) => {
      if (!isEdit) {
        dispatch(
          todoAdded({
            todo: {
              isCheked: values.checked,
              name: values.name,
            },
          })
        );
      } else {
        dispatch(
          todoEdited({
            id: todoSelected.id,
            todo: {
              isCheked: values.checked,
              name: values.name,
            },
          })
        );
      }
      formik.resetForm({
        values: {
          name: "",
          checked: false,
        },
      });
    },
  });
  useEffect(() => {
    if (todoSelected) {
      formik.setValues({
        checked: todoSelected.isCheked,
        name: todoSelected.name,
      });
    }
  }, [todoSelected]);

  return (
    <Box
      component={"form"}
      onSubmit={formik.handleSubmit}
      sx={{
        maxWidth: "350px",
      }}
    >
      <Stack spacing={2} direction="column">
        <FormControl>
          <TextField
            variant="outlined"
            label="Name:"
            fullWidth
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox checked={formik.values.checked} />}
          defaultChecked
          label={"Checked"}
          name="checked"
          onChange={formik.handleChange}
          value={formik.values.checked}
        />
        <Button variant="contained" type="submit">
          {isEdit ? "Editar" : "Guardar"}
        </Button>
      </Stack>
    </Box>
  );
};
export default CreateTodo;

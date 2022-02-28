import * as yup from "yup";
import { Asserts } from "yup";
export const createTodo = yup.object({
  name: yup.string().required(),
  checked: yup.boolean().required(),
});

export type CreateTodoSchema = Asserts<typeof createTodo>;

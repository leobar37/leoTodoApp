import { createReducer, createSelector, Selector } from "@reduxjs/toolkit";
import { Todo } from "../domain";
import * as todoActions from "../actions/todo.actions";
import { SafeAny } from "@leo/types";
import { getId } from "@leo/utils";
export const todosFeatureKey = "todos";

export interface State {
  selectedTodo: Todo | null;
  todos: Todo[];
}

export const initialState: State = {
  todos: [],
  selectedTodo: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(todoActions.todoAdded, (state, action) => {
      state.todos.push({
        ...action.payload.todo,
        id: getId(),
      });
    })
    .addCase(todoActions.todoDeleted, (state, action) => {
      state.todos = state.todos.filter(
        (item) => item.id !== action.payload.todo.id
      );
    })
    .addCase(todoActions.todoSelected, (state, action) => {
      state.selectedTodo = action.payload.todo;
    })
    .addCase(todoActions.todoEdited, (state, action) => {
      const index = state.todos.findIndex(
        (item) => item.id === action.payload.id
      );
      state.todos.splice(index, 1, {
        id: action.payload.id,
        ...action.payload.todo,
      });
    })
    .addCase(todoActions.listTodosSuccess, (state, action) => {
      state.todos = action.payload.todos;
    });
});

export const getSelectors = (baseSelector: SafeAny) => {
  const selectAllTodos = createSelector(
    baseSelector,
    (state: State) => state.todos
  );

  const getSelectedTodo = createSelector(
    baseSelector,
    (state: State) => state.selectedTodo
  );
  return {
    selectAllTodos,
    getSelectedTodo,
  };
};

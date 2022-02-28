import * as fromRoot from "@leo/app/reducers";
import * as fromTodo from "./todo.reducer";
import { combineReducers } from "@reduxjs/toolkit";
export const todoFeatureKey = "todoState";
import { createSelector } from "@reduxjs/toolkit";
export interface TodoState {
  [fromTodo.todosFeatureKey]: fromTodo.State;
}

export interface State extends fromRoot.State {
  [todoFeatureKey]: TodoState;
}

export const todoReducer = combineReducers({
  [fromTodo.todosFeatureKey]: fromTodo.reducer,
});

export const selectTodoDomain = (state: State) => state[todoFeatureKey];

export const selectTodoFeature = createSelector(
  selectTodoDomain,
  (todos) => todos[fromTodo.todosFeatureKey]
);

export const { selectAllTodos, getSelectedTodo } =
  fromTodo.getSelectors(selectTodoFeature);

import { ADD_TODO, EDIT_TODO, DELETE_TODO } from "../store/actions/todoActionsConstantes"

export type TodoItem = {
  text: string,
  key: string,
}

export type TodoTypesState = Array<TodoItem>

export interface AddTodoAction {
  type: typeof ADD_TODO,
  payload: TodoItem
}

export interface EditTodoAction  {
  type: typeof EDIT_TODO,
  payload: TodoItem
}

export interface DeleteTodoAction  {
  type: typeof DELETE_TODO,
  key: string
}

export type TodoActionsType = AddTodoAction | EditTodoAction | DeleteTodoAction
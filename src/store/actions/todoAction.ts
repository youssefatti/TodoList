import { ActionCreator } from 'redux';

import { AddTodoAction, DeleteTodoAction, EditTodoAction, TodoItem } from './../../types/TodoTypes';
import { ADD_TODO, EDIT_TODO, DELETE_TODO } from "./todoActionsConstantes";

export const addTodo :ActionCreator<AddTodoAction> = (payload:TodoItem)=> {
	return {
		type: ADD_TODO,
		payload,
	};
}

export const editTodo :ActionCreator<EditTodoAction> = (payload:TodoItem)=> {
	return {
		type: EDIT_TODO,
		payload,
	};
}

export const deleteTodo :ActionCreator<DeleteTodoAction> = (key:string)=> {
	return {
		type: DELETE_TODO,
		key,
	};
}
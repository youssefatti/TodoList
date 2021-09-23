import { ActionType } from 'typesafe-actions';

import {addTodo, editTodo, deleteTodo} from './todoAction';

export type RootAction = ActionType<typeof rootActions>

const rootActions = {
  addTodo, editTodo, deleteTodo,
}

export default rootActions
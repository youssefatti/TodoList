import { combineReducers } from "redux";
import type { StateType } from 'typesafe-actions'

import todosReducer from "./todosReducer"

export type RootState = StateType<typeof rootReducer>

const rootReducer = combineReducers({
  todos : todosReducer
})

export default rootReducer
import { TodoActionsType, TodoTypesState } from "../../types/TodoTypes";
import { ADD_TODO, EDIT_TODO, DELETE_TODO } from "../actions/todoActionsConstantes";

const initialState:TodoTypesState = [
		{
		text:'Faire le test technique',
		key:'1'
	},
	{
		text:'Sauvegarder le test technique',
		key:'2'
	},
	{
		text:'Envoyer le test technique',
		key:'3'
	},
	{
		text:`Aller à l'entretien`,
		key:'4'
	},
]

const todosReducer = (state = initialState, action:TodoActionsType) => {
	switch (action.type) {
		case ADD_TODO: {
			// Add the new todo to the list
			return [
					...state, action.payload
				] 
		}
		case EDIT_TODO: {
			// Looking for the current todo to update and edit it
			return state.map((todo:any) => {
				if (todo.key === action.payload.key) {
					return {
						...todo,
						...action.payload,
					};
				} else {
					return todo;
				}
			});
		}
		case DELETE_TODO: {
			// Looking for the current todo to delete and remove it
			return state.filter((todo:any) => todo.key !== action.key);
		}
		default: {
			return state;
		}
	}
};

export default todosReducer;
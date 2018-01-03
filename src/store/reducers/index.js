import { combineReducers } from 'redux';
import { router as RouterReducer } from 'redux-ui-router';
import { TodosReducer }  from './todos.reducer';
import {UserReducer} from './user.reducer';

export const RootReducer = combineReducers({
	todos: TodosReducer,
	router: RouterReducer,
	user: UserReducer
});

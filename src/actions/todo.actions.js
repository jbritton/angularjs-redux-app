import { ADD_TODO, REMOVE_TODO } from './action-type.constants';

function addTodo(todo){
	return {
		type: ADD_TODO,
		payload: todo
	};
}

function removeTodo(index){
	return {
		type: REMOVE_TODO,
		payload: index
	};
}

export default { addTodo, removeTodo };
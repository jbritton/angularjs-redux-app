import { LOGIN, LOGOUT, REGISTER } from '../../actions/action-type.constants';

const initialState = {
	authenticated: false,
	username: null
};

export function UserReducer(state = initialState, action) {
	switch (action.type){
		case LOGIN:
			return { authenticated: true, username: action.payload.username };
		case LOGOUT:
			return { authenticated: false, username: null };
		case REGISTER:
			return { authenticated: true, username: action.payload.username };
		default:
			return state;
	}
}


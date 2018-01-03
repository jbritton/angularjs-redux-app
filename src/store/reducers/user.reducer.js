import { USER } from '../../constants/user';

const initialState = {
	authenticated: false,
	username: null
};

export function UserReducer(state = initialState, action) {
	switch (action.type){
		case USER.LOGIN:
			return { authenticated: true, username: action.payload.username };
		case USER.LOGOUT:
			return { authenticated: false, username: null };
		case USER.REGISTER:
			return { authenticated: true, username: action.payload.username };
		default:
			return state;
	}
}


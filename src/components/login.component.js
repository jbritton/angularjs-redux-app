
const LoginTemplate = `
	<div class="container">
		<div class="row">
			<form class="col-md-6">
				<div class="form-group">
					<label>Username</label>
					<input type="text" 
						class="form-control" 
						placeholder="Email/Username"
						ng-model="vm.username">
				</div>
				<div class="form-group">
					<label>Password</label>
					<input type="password" 
						class="form-control" 
						placeholder="Password"
						ng-model="vm.password">
				</div>		
				<button class="btn btn-default"
					ng-click="vm.onLogin()">
					Login
				</button>	
			</form>
		</div>
	</div>
`;

class LoginController {
	static get $inject(){
		return ['$log', '$ngRedux', 'UserActions'];
	}

	constructor($log, $ngRedux, UserActions){
		// services
		this.log = $log;

		// model
		this.username = null;
		this.password = null;

		// connect to redux store
		this.disconnectRedux = $ngRedux.connect(this.mapStateToThis, UserActions)(this);
	}

	mapStateToThis(state){
		return {
			username: state.user.username
		};
	}

	onLogin(){
		// call login action (registered via redux connect)
		this.login(this.username, this.password);
	}

	$onDestroy(){
		// disconnect from redux store
		this.disconnectRedux();
	}
}

const LoginComponent = {
	selector: 'login',
	bindings: {},
	controller: LoginController,
	controllerAs: 'vm',
	template: LoginTemplate
};

export default LoginComponent;

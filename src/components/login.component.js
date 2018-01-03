

const LoginHtml = `
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
		this.log = $log;
		this.username = null;
		this.password = null;
		this.unsubscribe = $ngRedux.connect(this.mapStateToThis, UserActions)(this);
	}

	mapStateToThis(state){
		return {
			username: state.user.username
		};
	}

	onLogin(){
		this.login(this.username, this.password);
	}

	$onDestroy(){
		this.unsubscribe();
	}
}

const LoginComponent = {
	selector: 'login',
	bindings: {},
	controller: LoginController,
	controllerAs: 'vm',
	template: LoginHtml
};

export default LoginComponent;

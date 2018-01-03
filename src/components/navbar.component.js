
const NavBarHtml = `
	<nav class="navbar navbar-default navbar-static-top">
		<div class="container-fluid">
			<ul class="nav navbar-nav">
				<li><a href="#" ui-sref="app.home">Home</a></li>
				<li><a href="#" ui-sref="app.blog">Blog</a></li>
			</ul>
		</div>
	</nav>
`;

class NavBarController {
	static get $inject(){
		return ['$log', '$ngRedux'];
	}

	constructor($log, $ngRedux){
		this.log = $log;
		const mapState = state => state;
		const disconnect = $ngRedux.connect(mapState)(this);
		this.$onDestroy = disconnect;
	}

	$onInit(){ }
}

const NavBarComponent = {
	selector: 'navbar',
	bindings: {},
	controller: NavBarController,
	controllerAs: 'vm',
	template: NavBarHtml
};

export default NavBarComponent;
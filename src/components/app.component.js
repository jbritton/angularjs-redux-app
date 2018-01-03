
const AppHtml = `
	<div>
		<navbar></navbar>
		<div ui-view></div>
		<footer>Footer</footer>
	</div>
`;

class AppController {
	static get $inject(){
		return ['$log'];
	}

	constructor($log){
		this.log = $log;
	}

	$onInit(){ }
	$onDestroy(){ }
}

const AppComponent = {
	selector: 'app',
	bindings: {},
	controller: AppController,
	controllerAs: 'vm',
	template: AppHtml
};

export default AppComponent;



const AppTemplate = `
	<div>
		<navbar></navbar>
		<div ui-view></div>
		<footer></footer>
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
	template: AppTemplate
};

export default AppComponent;


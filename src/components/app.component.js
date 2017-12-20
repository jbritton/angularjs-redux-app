const AppHtml = `
	<div>
		<h1>App</h1>
	</div>
`;

class AppController {
	static get $inject(){
		return ['$log'];
	}

	constructor($log, AppService){
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
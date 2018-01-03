import TodoActions from '../actions/todo.actions';

const HomeHtml = `
	<div class="container">
	    <div class="row">
	        <div class="col-md-6">
	            <h1>Todos</h1>
	            <div class="input-group">
	                <input type="text" class="form-control" placeholder="Add Todo" ng-model="vm.todo">
	                <span class="input-group-btn">
	                    <button class="btn btn-primary" type="button" ng-disabled="!vm.todo" ng-click="vm.submitTodo(vm.todo)">Save</button>
	                  </span>
	            </div><!-- /input-group -->
	            <hr>
	            <ul class="list-unstyled">
	                <li class="ui-state-default" ng-repeat="todo in vm.todos">
	                    <div class="checkbox">
	                        <label>
	                            <input type="checkbox" ng-click="vm.removeTodo($index)"> {{todo}}
	                        </label>
	                    </div>
	                </li>
	            </ul>
	        </div>
	    </div>
	</div>
`;

class HomeController {
	static get $inject(){
		return ['$ngRedux'];
	}

	constructor($ngRedux) {
		this.todo = '';
		this.unsubscribe = $ngRedux.connect(this.mapStateToThis, TodoActions)(this);
	}

	submitTodo(){
		this.addTodo(this.todo);
		this.todo = '';
	}

	$onDestroy(){
		this.unsubscribe();
	}

	mapStateToThis(state) {
		return {
			todos: state.todos
		};
	}
}


const HomeComponent = {
	selector: 'home',
	bindings: {},
	controller: HomeController,
	controllerAs: 'vm',
	template: HomeHtml
};

export default HomeComponent;
class App{
	constructor(){
		this.component = {};
	}



	addComponent(component){
		this.components[component.name] = component;
	}

	showComponent(componentName){
		this.component[componentName].view();
	}

	updateView(targetElement, content){

	}


}

export default App;
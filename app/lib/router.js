class Router{
	constructor(){

	}

	addRoute(routeRegex, component){
		const current_url = window.location.hash;
		
		if(current_url.match(routeRegex)){

		}
	}	

}

export default Router;
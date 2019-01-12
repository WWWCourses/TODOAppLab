class TodosComponent{
	#tmpl = `
		<ul>
			{{included_todos}}
		</ul>
	`;

	#model = [];
	#todosURL = '/data/todos.json';

	constructor(name){
		this.name = name;
	}



	view(){
		return `<h3>todosComponent View</h3>`
	}

	controler(){
		fetch(this.#todosURL)
			.then(res => {
			   return res.json();
			})
			.then(data => {
				console.log(`data: ${data}`);
				this.#model = data;
			})
			.then( this.view )
	}
}

export default todosComponent;
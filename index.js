import TodosComponent from './app/components/todosComponent';
import Router from './app/lib/router';
import App from './app/lib/app';


const app = new App();

const todosComponent = new TodosComponent('TodosComponent');
app.addComponent(todosComponent)

const router = new Router();
router.addRoute('^#?/?$', todosComponent);
router.addRoute('^#/todos$', todosComponent);
router.addRoute('^#/todo/(\d+)$', todoComponent);
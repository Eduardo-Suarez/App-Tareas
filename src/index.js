import {Todo, TodoList} from './Clases/index2';
import { crearTodoHtml,  } from './js/componentes';
import './styles.css';


export const todoList = new TodoList(); 

todoList.todos.forEach(crearTodoHtml);
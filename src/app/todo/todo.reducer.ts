import * as fromTodo from './todo.actions';
import { Todo } from './models/todo.model';


const todo1 = new Todo('hola');
const todo2 = new Todo('hola 2');
const todo3 = new Todo('hola 3');
todo1.completado = true;

const estadoInicial: Todo[] = [todo1, todo2, todo3];


export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): Todo[] {


    switch (action.type) {

        case fromTodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);
            return [...state, todo];

        case fromTodo.TOGGLE_TODO:
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    };
                } else {
                    return todoEdit;
                }
            });

        case fromTodo.EDITAR_TODO:
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        texto: action.texto
                    };
                } else {
                    return todoEdit;
                }
            });
        case fromTodo.ELIMINAR_TODO:
            return state.filter(todoEdit => todoEdit.id !== action.id);

        case fromTodo.SELECT_ALL_TODO:
            return state.map(todoEdit => {
                return {
                    ...todoEdit,
                    completado: action.completado
                };

            });

        case fromTodo.CLEAR_COMPLETED_TODO:
            return state.filter(todoEdit => !todoEdit.completado);

        default:
            return state;
    }
}

import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { borrar, crear, editar, toggle, toggleAllItem } from './todo.actions';


export const estadoInicial:Todo[] = [
    new Todo('Salvar el mundo'),
    new Todo('Aprender ngrx'),
    new Todo('Dormir')
];

const _todoReducer = createReducer(
    estadoInicial,
    on(crear, (state, {texto}) => [...state, new Todo(texto)]),
    on(toggle, (state, {id}) => {
        // Map crea un nuevo arreglo.
        return state.map( todo => {
            // La idea es que no se mute en ningun momento el state/todo.
            if (todo.id === id) {
                return {
                    ...todo,
                    estado: !todo.estado,                    
                }
            }
            else {
                return todo;
            }
        })
    }),
    on(editar, (state, {id, texto}) => {
        // Map crea un nuevo arreglo.
        return state.map( todo => {
            // La idea es que no se mute en ningun momento el state/todo.
            if (todo.id === id) {
                return {
                    ...todo,
                    texto: texto
                }
            }
            else {
                return todo;
            }
        })
    }),
    on(borrar, (state, { id }) => state.filter( todo => todo.id !== id)),
    on(toggleAllItem, (state, { estado }) => {
        return state.map ( todo => {
            return {
                ...todo,
                estado: estado
            }
        })
    })
);

export function todoReducer(state: any, action: any) {
    return _todoReducer(state, action)
}
import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[TODO] Crear todo',
    props<{ texto: string }>());

export const toggle = createAction(
    '[TODO] Toggle todo',
    props<{ id: number }>());

export const editar = createAction(
    '[TODO] Editar todo',
    props<{ id: number, texto: string }>());

export const borrar = createAction(
    '[TODO] Borrar todo',
    props<{ id: number }>());

export const toggleAllItem = createAction(
    '[TODO] Toggle all todo',
    props<{ estado: boolean }>());

export const borrarTodos = createAction(
    '[TODO] Borrar todos los todos');
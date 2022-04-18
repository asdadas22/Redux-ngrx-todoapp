import { createAction, props } from '@ngrx/store';

export type allFilter = 'todos' | 'completados' | 'pendientes';

export const filterItems = createAction(
    '[Filter] Set Filter',
    props<{ allfilter: allFilter}>()
);
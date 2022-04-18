import { Action, createReducer, on } from '@ngrx/store';
import { allFilter, filterItems } from './filter.actions';

export const initialState: allFilter = 'todos';

const _filterReducer = createReducer<allFilter, Action>(
  initialState,
  on( filterItems, ( state , { allfilter: filter }) => filter),
);

export function filterReducer(state: any, action: any) {
  return _filterReducer(state, action);
}

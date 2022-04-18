import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/filter/filter.actions';
import { borrarTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  currentFilter: actions.allFilter = 'todos';
  allFilterList: actions.allFilter[] = ['completados', 'pendientes', 'todos'];

  pending: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.subscribe( state => {
        this.currentFilter = state.filter
        this.pending = state.todos.filter( todo => !todo.estado).length;
      });

  }


  actualizarFiltro(newFilter: actions.allFilter) {
    this.store.dispatch(actions.filterItems({allfilter: newFilter}));
  }

  borrarTodos() {
    this.store.dispatch(borrarTodos());
  }

}

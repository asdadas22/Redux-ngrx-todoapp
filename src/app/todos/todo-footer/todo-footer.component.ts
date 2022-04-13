import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  currentFilter: actions.allFilter = 'todos';
  allFilterList: actions.allFilter[] = ['completados', 'pendientes', 'todos'];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('filter')
      .subscribe( filter => this.currentFilter = filter);

  }


  actualizarFiltro(newFilter: actions.allFilter) {
    this.store.dispatch(actions.filterItems({filter: newFilter}));
  }

}

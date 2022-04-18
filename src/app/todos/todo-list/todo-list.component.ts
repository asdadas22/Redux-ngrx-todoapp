import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { allFilter } from 'src/app/filter/filter.actions';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  todos: Todo[] = [];
  currentFilter: allFilter;

  constructor(private store: Store<AppState>) { 

  }

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.todos = state.todos;
      this.currentFilter = state.filter;
    });
  }

}

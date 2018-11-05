import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { SeleccionarTodoAction } from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {


  seleccionarTodos = true;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  marcarTodos() {
    this.seleccionarTodos = !this.seleccionarTodos;
    this.store.dispatch(new SeleccionarTodoAction(this.seleccionarTodos));
  }

}

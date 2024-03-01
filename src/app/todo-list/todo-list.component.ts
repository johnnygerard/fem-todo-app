import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoListService } from '../todo-list.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgFor,
    TodoItemComponent,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  readonly list = this._todoListService.list;

  constructor(private _todoListService: TodoListService) { }
}

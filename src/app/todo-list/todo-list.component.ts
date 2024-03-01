import { ChangeDetectionStrategy, Component, TrackByFunction } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoListService } from '../todo-list.service';
import { NgFor } from '@angular/common';
import { Filter } from '../types/filter.enum';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../types/todo-item.class';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
    TodoItemComponent,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  readonly activeItemsCount = this._todoListService.activeItemsCount;
  list = this._todoListService.list;
  filter = this._todoListService.filter;
  filterValues = Object.values(Filter);
  trackById: TrackByFunction<TodoItem> = (_index, item) => item.id;

  constructor(private _todoListService: TodoListService) { }

  clearCompleted(): void {
    this._todoListService.clearCompletionStatus();
  }
}

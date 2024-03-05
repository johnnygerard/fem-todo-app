import { ChangeDetectionStrategy, Component, booleanAttribute, input } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoListService } from '../todo-list.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../types/todo-item.class';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    DragDropModule,
    FormsModule,
    NgFor,
    NgIf,
    TodoItemComponent,
    FilterComponent,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  readonly activeItemsCount = this._todoListService.activeItemsCount;
  isMobile = input.required({ transform: booleanAttribute });
  list = this._todoListService.list;

  constructor(private _todoListService: TodoListService) { }

  clearCompleted(): void {
    this._todoListService.clearCompletionStatus();
  }

  drop(event: CdkDragDrop<TodoItem[]>): void {
    this._todoListService.reorderItems(event.previousIndex, event.currentIndex);
  }
}

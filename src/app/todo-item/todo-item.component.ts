import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../types/todo-item.class';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
  readonly todoItem = input.required<TodoItem>();
  id = computed(() => `completion-checkbox-${this.todoItem().id}`);

  constructor(private _todoListService: TodoListService) { }

  destroy(): void {
    this._todoListService.removeItem(this.todoItem());
  }
}

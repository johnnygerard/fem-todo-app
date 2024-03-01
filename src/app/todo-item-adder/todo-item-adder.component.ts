import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-todo-item-adder',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './todo-item-adder.component.html',
  styleUrl: './todo-item-adder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemAdderComponent {
  description = '';

  constructor(private _todoListService: TodoListService) { }

  onSubmit(): void {
    this._todoListService.addItem(this.description);
  }
}

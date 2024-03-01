import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-add-todo-item',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './add-todo-item.component.html',
  styleUrl: './add-todo-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoItemComponent {
  description = '';

  constructor(private _todoListService: TodoListService) { }

  onSubmit(): void {
    this._todoListService.addItem(this.description);
  }
}

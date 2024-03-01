import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoItemComponent } from './add-todo-item/add-todo-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TodoListComponent,
    AddTodoItemComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }

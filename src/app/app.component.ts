import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemAdderComponent } from './todo-item-adder/todo-item-adder.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TodoListComponent,
    TodoItemAdderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }

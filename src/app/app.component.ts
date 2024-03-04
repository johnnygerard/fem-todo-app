import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';
import { TodoItemAdderComponent } from './todo-item-adder/todo-item-adder.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ThemeBackgroundComponent } from './theme-background/theme-background.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ThemeBackgroundComponent,
    ThemeSwitchComponent,
    TodoItemAdderComponent,
    TodoListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }

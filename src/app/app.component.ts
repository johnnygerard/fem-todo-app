import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';
import { TodoItemAdderComponent } from './todo-item-adder/todo-item-adder.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ThemeBackgroundComponent } from './theme-background/theme-background.component';
import { LogoComponent } from './svg/logo/logo.component';
import { FilterComponent } from './filter/filter.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgIf,
    ThemeBackgroundComponent,
    LogoComponent,
    ThemeSwitchComponent,
    TodoItemAdderComponent,
    TodoListComponent,
    FilterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isMobile = window.innerWidth < 604;

  @HostListener('window:resize')
  onResize(): void {
    this.isMobile = window.innerWidth < 604;
  }
}

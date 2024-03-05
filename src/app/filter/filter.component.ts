import { ChangeDetectionStrategy, Component, TrackByFunction } from '@angular/core';
import { TodoListService } from '../todo-list.service';
import { Filter } from '../types/filter.enum';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { TodoItem } from '../types/todo-item.class';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    FormsModule,
    NgFor,
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
  filter = this._todoListService.filter;
  filterValues = Object.values(Filter);
  trackById: TrackByFunction<TodoItem> = (_index, item) => item.id;

  constructor(private _todoListService: TodoListService) { }

}

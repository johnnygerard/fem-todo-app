import { Injectable, Signal, computed, signal } from '@angular/core';
import { TodoItem } from './types/todo-item.class';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  #id = 0;
  #list = signal<TodoItem[]>([]);
  activeList = computed(() => this.#list().filter(item => !item.completed()));
  completedList = computed(() => this.#list().filter(item => item.completed()));
  activeItemsCount = computed(() => this.#list().reduce(
    (count, item) => count + (item.completed() ? 0 : 1), 0)
  );

  get list(): Signal<TodoItem[]> {
    return this.#list.asReadonly();
  }

  addItem(description: string): void {
    // Note: The todo item is added at the top of the list.
    this.#list.update(list => [new TodoItem(this.#id++, description), ...list]);
  }

  removeItem(item: TodoItem): void {
    this.#list.update(list => list.filter(i => i !== item));
  }

  clearCompletionStatus(): void {
    this.#list.update(list => {
      list.forEach(item => item.completed.set(false));
      return [...list];
    });
  }
}

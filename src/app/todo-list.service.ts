import { Injectable, computed, effect, model, signal } from '@angular/core';
import { TodoItem } from './types/todo-item.class';
import { Filter } from './types/filter.enum';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { TodoItemJSON } from './types/todo-item-json.type';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  filter = model(Filter.ALL);

  activeItemsCount = computed(() => this.list().reduce(
    (count, item) => count + (item.isCompleted() ? 0 : 1), 0)
  );

  list = computed(() => {
    const filter = this.filter();
    const list = this.#list();

    switch (filter) {
      case Filter.ALL:
        return list;
      case Filter.ACTIVE:
        return list.filter(item => !item.isCompleted());
      case Filter.COMPLETED:
        return list.filter(item => item.isCompleted());
      default: {
        const _exhaustiveCheck: never = filter;
        return _exhaustiveCheck;
      }
    }
  });
  #id = 0;
  #list = signal<TodoItem[]>([
    new TodoItem(this.#id++, 'Complete online JavaScript course', { isCompleted: true }),
    new TodoItem(this.#id++, 'Jog around the park 3x'),
    new TodoItem(this.#id++, '10 minutes meditation'),
    new TodoItem(this.#id++, 'Read for 1 hour'),
    new TodoItem(this.#id++, 'Pick up groceries'),
    new TodoItem(this.#id++, 'Complete Todo App on Frontend Mentor'),
  ]);

  constructor() {
    // Restore todo list from local storage.
    const KEYS = {
      TODO_LIST: 'todoList',
      ID: 'id',
    } as const;
    const serializedList = localStorage.getItem(KEYS.TODO_LIST);
    const serializedId = localStorage.getItem(KEYS.ID);

    if (serializedList) {
      const deserializedList = JSON.parse(serializedList) as TodoItemJSON[];
      this.#list.set(deserializedList.map(item => TodoItem.fromJSON(item)));
    }

    if (serializedId) this.#id = parseInt(serializedId);

    // Backup todo list to local storage.
    effect(() => {
      localStorage.setItem(
        KEYS.TODO_LIST,
        JSON.stringify(
          this.#list(),
          (key, value) => key === 'completed' ? value() : value
        ));

      localStorage.setItem(KEYS.ID, this.#id.toString());
    });
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
      list.forEach(item => item.isCompleted.set(false));
      return [...list];
    });
  }

  reorderItems(fromIndex: number, toIndex: number): void {
    this.#list.update(list => {
      moveItemInArray(list, fromIndex, toIndex);
      return [...list];
    });
  }
}

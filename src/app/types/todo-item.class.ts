import { ModelSignal, model } from "@angular/core";
import { TodoItemJSON } from "./todo-item-json.type";

export class TodoItem {
  isCompleted: ModelSignal<boolean>;

  constructor(
    public readonly id: number,
    public readonly description: string,
    options = { isCompleted: false }
  ) {
    this.isCompleted = model(options.isCompleted);
  }

  static fromJSON(json: TodoItemJSON): TodoItem {
    const todoItem = new TodoItem(json.id, json.description);
    todoItem.isCompleted.set(json.completed);
    return todoItem;
  }
}

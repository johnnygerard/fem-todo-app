import { model } from "@angular/core";
import { TodoItemJSON } from "./todo-item-json.type";

export class TodoItem {
  completed = model(false);

  constructor(
    public readonly id: number,
    public readonly description: string,
  ) { }

  static fromJSON(json: TodoItemJSON): TodoItem {
    const todoItem = new TodoItem(json.id, json.description);
    todoItem.completed.set(json.completed);
    return todoItem;
  }
}

import { model } from "@angular/core";

export class TodoItem {
  completed = model(false);

  constructor(public readonly description: string) { }
}

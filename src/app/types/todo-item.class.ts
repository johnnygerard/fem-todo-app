import { model } from "@angular/core";

export class TodoItem {
  completed = model(false);

  constructor(
    public readonly id: number,
    public readonly description: string,
  ) { }
}

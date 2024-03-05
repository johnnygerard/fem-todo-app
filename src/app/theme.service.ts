import { Injectable, ModelSignal, effect, model } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkTheme: ModelSignal<boolean>;
  readonly #STORAGE_KEY = 'isDarkTheme';
  readonly #DARK_THEME_CLASS = 'dark-theme';

  constructor() {
    this.isDarkTheme = model(this.#userTheme);

    effect(() => {
      const isDarkTheme = this.isDarkTheme();

      window.document.body.classList.toggle(this.#DARK_THEME_CLASS, isDarkTheme);
      localStorage.setItem(this.#STORAGE_KEY, isDarkTheme.toString());
    });
  }

  /**
   * Restore user theme from local storage if present, otherwise use browser/system theme.
   * @returns The user's preferred theme
   */
  get #userTheme(): boolean {
    const isDarkTheme = localStorage.getItem(this.#STORAGE_KEY) as 'true' | 'false' | null;

    return isDarkTheme === null ?
      window.matchMedia('(prefers-color-scheme: dark)').matches : // False if unsupported
      isDarkTheme === 'true';
  }
}

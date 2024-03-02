import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Theme } from './theme.enum';

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  imports: [],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSwitchComponent {
  readonly #STORAGE_KEY = 'theme';
  readonly #DARK_THEME_CLASS = 'dark-theme'; // Works like a boolean attribute (absent = light)
  #_theme = this.#restoreTheme();

  constructor() {
    // Set initial user theme (defaults to light theme)
    if (this.#theme === Theme.DARK)
      window.document.body.classList.add(this.#DARK_THEME_CLASS);
  }

  toggleTheme(): void {
    this.#theme = this.#theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
  }

  get #theme(): Theme {
    return this.#_theme;
  }

  set #theme(theme: Theme) {
    this.#_theme = theme;
    localStorage.setItem(this.#STORAGE_KEY, theme);

    // Add or remove dark theme class if theme is dark or light, respectively.
    window.document.body.classList.toggle(this.#DARK_THEME_CLASS, theme === Theme.DARK);
  }

  /**
   * Restore user theme from local storage if present, otherwise use browser/system theme.
   * @returns User's preferred theme
   */
  #restoreTheme(): Theme {
    const theme = localStorage.getItem(this.#STORAGE_KEY);

    if (theme)
      return theme as Theme;
    else {
      // Note: matchMedia.matches returns false for unsupported media features
      const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return isDarkTheme ? Theme.DARK : Theme.LIGHT;
    }
  }
}

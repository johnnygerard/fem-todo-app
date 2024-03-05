import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, ModelSignal, effect, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  imports: [
    FormsModule,
    NgTemplateOutlet,
  ],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSwitchComponent {
  isDarkTheme = this._themeService.isDarkTheme;

  constructor(private _themeService: ThemeService) { }
}

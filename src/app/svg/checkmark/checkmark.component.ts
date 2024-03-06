import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, booleanAttribute, computed, input } from '@angular/core';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'svg-checkmark',
  standalone: true,
  imports: [
    NgIf,
  ],
  templateUrl: './checkmark.component.html',
  styleUrl: './checkmark.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckmarkComponent {
  readonly GRADIENT = 'url(#svg-checkmark-gradient)'; // Gradient definition in index.html
  isChecked = input(false, { transform: booleanAttribute });
  isHighlighted = input(false, { transform: booleanAttribute });
  circleStroke = computed(() => this._themeService.isDarkTheme() ? '#393A4B' : '#E3E4F1');

  constructor(private _themeService: ThemeService) { }
}

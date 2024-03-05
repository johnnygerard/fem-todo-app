import { NgIf, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-background',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
  ],
  templateUrl: './theme-background.component.html',
  styleUrl: './theme-background.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeBackgroundComponent {
  readonly BREAKPOINT = 604;
  readonly isDarkTheme = this._themeService.isDarkTheme.asReadonly;
  isMobile = window.innerWidth < this.BREAKPOINT;

  constructor(private _themeService: ThemeService) { }

  @HostListener('window:resize')
  onResize(): void {
    this.isMobile = window.innerWidth < this.BREAKPOINT;
  }
}

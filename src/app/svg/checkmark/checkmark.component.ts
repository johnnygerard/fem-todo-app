import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, booleanAttribute, input } from '@angular/core';

@Component({
  selector: 'svg-checkmark',
  standalone: true,
  imports: [NgIf],
  template: `
<svg viewBox="0 0 24 24" fill="none">
  <ng-container *ngIf="checked(); else unchecked">
    <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_0_479)"/>
    <path d="M8 12.3041L10.6959 15L16.6959 9" stroke="white" stroke-width="2"/>
    <defs>
      <linearGradient id="paint0_linear_0_479" x1="-12" y1="12" x2="12" y2="36" gradientUnits="userSpaceOnUse">
        <stop stop-color="#55DDFF"/>
        <stop offset="1" stop-color="#C058F3"/>
      </linearGradient>
    </defs>
  </ng-container>

  <ng-template #unchecked>
    <circle cx="12" cy="12" r="11.5" fill="white" stroke="#E3E4F1"/>
  </ng-template>
</svg>
  `,
  styleUrl: './checkmark.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckmarkComponent {
  checked = input(false, { transform: booleanAttribute });
}

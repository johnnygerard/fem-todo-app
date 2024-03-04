import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'svg-cross',
  standalone: true,
  imports: [],
  template: `
<svg viewBox="0 0 18 18">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6777 0.707107L16.9706 0L8.83883 8.13173L0.707107 0L0 0.707107L8.13173 8.83883L0 16.9706L0.707106 17.6777L8.83883 9.54594L16.9706 17.6777L17.6777 16.9706L9.54594 8.83883L17.6777 0.707107Z" />
</svg>
  `,
  styleUrl: './cross.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrossComponent {

}

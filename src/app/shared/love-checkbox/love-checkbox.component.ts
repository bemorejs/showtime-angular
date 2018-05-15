import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CheckboxComponent } from '../checkbox/checkbox.component';

@Component({
  selector: 'flwp-love-checkbox',
  template: `
    <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
         [ngClass]="{'active': checked}"
         (click)="checkboxClicked()"
    >
      <g transform="translate(-44.000000, -264.000000)">
        <g transform="translate(46.000000, 268.000000)">
          <path stroke-width="2" stroke="#000000" fill="#FF6D6D"
                d="M7.74936906,0 C2.89413799,0 0.691789506,4.31756219 0.691789506,4.31756219 C0.691789506,4.31756219 -1.10156588,7.93973479
          1.08659788,11.3042181 C3.27476163,14.6687014 14.2677062,25.2505114 14.504341,25.2505114 C14.6846128,25.2505114
          25.2606507,14.6687014 27.4488145,11.3042181 C29.6369782,7.93973479 27.8436228,4.31756219 27.8436228,4.31756219
          C27.8436228,4.31756219 25.6412743,0 20.7860433,0 C15.9308122,0 14.5354123,4.15056046 14.5354123,3.77921784 C14.5354123,3.77921784
          12.6046001,0 7.74936906,0 Z">
          </path>
        </g>
      </g>
    </svg>
  `,
  styleUrls: ['./love-checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => LoveCheckboxComponent),
    multi: true,
  }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoveCheckboxComponent extends CheckboxComponent {
}

import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'flwp-checkbox',
  template: `
    <div class="checkbox-container" (click)="checkboxClicked()" [ngClass]="{'disabled': disabled}">
      <div class="checkbox" [ngClass]="{'checked': checked}">
        <img *ngIf="checked" src="assets/icons/check.svg" class="check">
      </div>
      <span class="checkbox-label">{{label}}</span>
    </div>
  `,
  styleUrls: ['./checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true,
  }]
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() label: string;

  /**
   * opacity to 0.5, pointer-events and user-select to none
   */
  @Input() disabled = false;

  checked: boolean;

  changeCallback: (value: boolean) => void = () => null;
  touchCallback: () => void = () => null;

  checkboxClicked(): void {
    this.checked = !this.checked;
    this.changeCallback(this.checked);
    this.touchCallback();
  }

  writeValue(value: boolean): void {
    this.checked = value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.changeCallback = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.touchCallback = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }
}

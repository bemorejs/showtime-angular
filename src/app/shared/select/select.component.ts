import { Component, ChangeDetectionStrategy, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectItem } from '../data.mock';

@Component({
  selector: 'flwp-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true,
  }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements ControlValueAccessor {
  @Input('label') selectLabel: string;
  @Input() placeholder: string;

  selectedValue: SelectItem;

  @Input() selectedOption: SelectItem;
  @Output() selectedOptionChange = new EventEmitter<SelectItem>();

  /**
   * options of possible selection
   */
  @Input() options: SelectItem[] = [];

  expanded = false;
  isDisabled = false;

  changeCallback: (value: number | string) => void = () => null;
  touchCallback: () => void = () => null;

  changeSelected(item: SelectItem): void {
    this.selectedOption = item;
    this.selectedOptionChange.emit(this.selectedOption);
    this.selectedValue = item;
    this.expanded = false;
    this.changeCallback(item);
    this.touchCallback();
  }

  switchDropdown(e: Event): void {
    e.preventDefault();
    this.expanded = !this.expanded;
  }

  writeValue(value: SelectItem): void {
    this.selectedValue = value;
  }

  registerOnChange(fn: (value: number | string) => void): void {
    this.changeCallback = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.touchCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}

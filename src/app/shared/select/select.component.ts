import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, forwardRef, HostListener, Input, Output } from '@angular/core';
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

  changeCallback: (value: SelectItem) => void = () => null;
  touchCallback: () => void = () => null;

  changeSelected(item: SelectItem): void {
    this.selectedOption = item;
    this.selectedOptionChange.emit(this.selectedOption);
    this.selectedValue = item;
    this.expanded = false;
    this.changeCallback(item);
    this.touchCallback();
  }

  constructor(private eRef: ElementRef) {
  }

  @HostListener('document:click', ['$event'])
  toggleDropdown(event: Event): void {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.expanded = false;
    }
  }

  writeValue(value: SelectItem): void {
    this.selectedValue = value;
  }

  registerOnChange(fn: (value: SelectItem) => void): void {
    this.changeCallback = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.touchCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}

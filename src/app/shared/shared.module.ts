import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { MatIconModule } from '@angular/material';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoveCheckboxComponent } from './love-checkbox/love-checkbox.component';

@NgModule({
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  declarations: [SelectComponent, CheckboxComponent, LoveCheckboxComponent],
  exports: [SelectComponent, CheckboxComponent, LoveCheckboxComponent],
})
export class SharedModule {}

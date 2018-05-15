import { Component } from '@angular/core';
import { FOO, SelectItem } from './shared/data.mock';
import { DataService } from './shared/data.service';

@Component({
  selector: 'flwp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options: SelectItem[] = FOO;
  options$ = this.data.getData();
  selectedOption: SelectItem;
  checkedCheckbox: boolean;
  checkedLoveCheckbox: boolean;

  constructor(private readonly data: DataService) {}
}

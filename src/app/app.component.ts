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

  constructor(private readonly data: DataService) {}
}


/** TODO
 * - service that "gets" dropdown options from a server
 * - dropdown component
 *   - handle key events for navigation and click out of dropdown to close the dropdown
 * - extend dropdown to make an autocomplete
 * - have a pure pipe with caching to handle autocomplete ?? maybe too much
 *   - use pure pipe for something else like currency/unit convert or something like that
 *
 */

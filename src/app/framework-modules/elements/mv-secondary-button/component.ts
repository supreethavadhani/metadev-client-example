import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-mv-secondary-button',
  templateUrl: "./component.html",
  styleUrls: []
})


export class MvSecondaryyButtonComponent {
  @Input() name: string;
  @Input() tooltip: string;
  @Input() isDisabled: boolean = false;
  @Input() login: boolean = false;
}
import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Skill} from "@hamza/site-ui/shared/models";

@Component({
  selector: 'hamza-headered-list',
  templateUrl: './headered-list.component.html',
  styleUrls: ['./headered-list.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderedListComponent {
  @Input() title!: string;
  @Input() skills!: Skill[];

  constructor() {
  }

}

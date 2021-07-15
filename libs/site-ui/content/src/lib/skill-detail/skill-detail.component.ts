import {Component, Input, ViewEncapsulation} from '@angular/core';
import {SkillDetailModel} from "@hamza/site-ui/shared/models";

@Component({
  selector: 'hamza-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SkillDetailComponent {
  detailFileLoading = false;
  @Input() skillDetail?: SkillDetailModel;

  constructor() {
  }

  onLoad(event: string) {
    this.detailFileLoading = false;
  }

  onReady() {
    this.detailFileLoading = true;
  }

}

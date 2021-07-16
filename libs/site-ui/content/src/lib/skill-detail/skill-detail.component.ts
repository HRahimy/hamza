import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'hamza-skill-detail',
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SkillDetailComponent {
  detailFileLoading = false;
  @Input() skillDetailMarkdownPath?: string;

  constructor() {
  }

  onLoad(event: string) {
    this.detailFileLoading = false;
  }

  onReady() {
    this.detailFileLoading = true;
  }

}

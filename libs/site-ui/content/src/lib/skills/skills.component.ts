import {Component, ViewEncapsulation} from '@angular/core';
import {Skill, skills} from "@hamza/site-ui/shared/models";

@Component({
  selector: 'hamza-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SkillsComponent {

  skills: Skill[] = [...skills];

  systemSkills(): Skill[] {
    return this.skills.filter(value => value.skillType === 'systems');
  }

  frontendSkills(): Skill[] {
    return this.skills.filter(value => value.skillType === 'frontend');
  }

  backendSkills(): Skill[] {
    return this.skills.filter(value => value.skillType === 'backend');
  }
}

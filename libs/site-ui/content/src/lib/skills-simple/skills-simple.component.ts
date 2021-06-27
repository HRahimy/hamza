import {Component, ViewEncapsulation} from '@angular/core';
import {Skill, skills} from "@hamza/site-ui/shared/models";

@Component({
  selector: 'hamza-skills-simple',
  templateUrl: './skills-simple.component.html',
  styleUrls: ['./skills-simple.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SkillsSimpleComponent {
  skills: Skill[] = [...skills];

  constructor() {
  }

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

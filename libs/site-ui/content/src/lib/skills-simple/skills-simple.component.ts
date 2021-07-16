import {Component, ViewEncapsulation} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {
  SelectBackendSkill,
  SelectFrontendSkill,
  SelectSystemsSkill,
  SkillsState,
  SkillsStateModel
} from "@hamza/site-ui/shared/state";
import {Observable} from "rxjs";
import {Skill} from "@hamza/site-ui/shared/models";
import {Router} from "@angular/router";

@Component({
  selector: 'hamza-skills-simple',
  templateUrl: './skills-simple.component.html',
  styleUrls: ['./skills-simple.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class SkillsSimpleComponent {
  @Select(SkillsState) skills$?: Observable<SkillsStateModel>;
  @Select(SkillsState.frontendSkills) frontendSkills$?: Observable<Skill[]>;
  @Select(SkillsState.backendSkills) backendSkills$?: Observable<Skill[]>;
  @Select(SkillsState.systemsSkills) systemsSkills$?: Observable<Skill[]>;

  constructor(private store: Store, private router: Router) {
  }

  selectFrontendSkill(skill: Skill) {
    this.store.dispatch(new SelectFrontendSkill(skill));
  }

  selectBackendSkill(skill: Skill) {
    this.store.dispatch(new SelectBackendSkill(skill));
  }

  selectSystemsSkill(skill: Skill) {
    this.store.dispatch(new SelectSystemsSkill(skill));
  }

  openDialog(): void {
    this.router.navigate(['/subscribe']);
  }
}

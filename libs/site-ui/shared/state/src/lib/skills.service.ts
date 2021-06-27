import {Skill, skills} from "@hamza/site-ui/shared/models";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import produce from "immer";

export interface SkillsStateModel {
  skills: Skill[],
  frontendSelectedSkill?: Skill,
  backendSelectedSkill?: Skill,
  systemsSelectedSkill?: Skill,
}

export class SelectFrontendSkill {
  static readonly type = '[Skills] SelectFrontendSkill';

  constructor(public skill: Skill) {
  }
}

export class DeselectFrontendSkill {
  static readonly type = '[Skills] DeselectFrontendSkill';
}

export class SelectBackendSkill {
  static readonly type = '[Skills] SelectBackendSkill';

  constructor(public skill: Skill) {
  }
}

export class DeselectBackendSkill {
  static readonly type = '[Skills] DeselectBackendSkill';
}

export class SelectSystemsSkill {
  static readonly type = '[Skills] SelectSystemsSkill';

  constructor(public skill: Skill) {
  }
}

export class DeselectSystemsSkill {
  static readonly type = '[Skills] DeselectSystemsSkill';
}

@State<SkillsStateModel>({
  name: 'skills',
  defaults: {
    skills: [...skills]
  }
})
@Injectable({
  providedIn: 'root'
})
export class SkillsState {

  @Selector()
  static frontendSkills(state: SkillsStateModel): Skill[] {
    return state.skills.filter(value => value.skillType === 'frontend');
  }
  @Selector()
  static backendSkills(state: SkillsStateModel): Skill[] {
    return state.skills.filter(value => value.skillType === 'backend');
  }
  @Selector()
  static systemsSkills(state: SkillsStateModel): Skill[] {
    return state.skills.filter(value => value.skillType === 'systems');
  }

  @Action(SelectFrontendSkill)
  selectFrontendSkill(ctx: StateContext<SkillsStateModel>, action: SelectFrontendSkill) {
    ctx.setState(produce(draft => {
      draft.frontendSelectedSkill = action.skill;
    }));
  }

  @Action(DeselectFrontendSkill)
  deselectFrontendSkill(ctx: StateContext<SkillsStateModel>, action: DeselectFrontendSkill) {
    ctx.setState(produce(draft => {
      draft.frontendSelectedSkill = undefined;
    }));
  }

  @Action(SelectBackendSkill)
  selectBackendSkill(ctx: StateContext<SkillsStateModel>, action: SelectBackendSkill) {
    ctx.setState(produce(draft => {
      draft.backendSelectedSkill = action.skill;
    }));
  }

  @Action(DeselectBackendSkill)
  deselectBackendSkill(ctx: StateContext<SkillsStateModel>, action: DeselectBackendSkill) {
    ctx.setState(produce(draft => {
      draft.backendSelectedSkill = undefined;
    }));
  }

  @Action(SelectSystemsSkill)
  selectSystemsSkill(ctx: StateContext<SkillsStateModel>, action: SelectSystemsSkill) {
    ctx.setState(produce(draft => {
      draft.systemsSelectedSkill = action.skill;
    }));
  }

  @Action(DeselectSystemsSkill)
  deselectSystemsSkill(ctx: StateContext<SkillsStateModel>, action: DeselectSystemsSkill) {
    ctx.setState(produce(draft => {
      draft.systemsSelectedSkill = undefined;
    }));
  }
}

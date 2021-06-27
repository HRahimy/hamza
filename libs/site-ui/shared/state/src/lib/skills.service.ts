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

export class SelectBackendSkill {
  static readonly type = '[Skills] SelectBackendSkill';

  constructor(public skill: Skill) {
  }
}

export class SelectSystemsSkill {
  static readonly type = '[Skills] SelectSystemsSkill';

  constructor(public skill: Skill) {
  }
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
    const currentState = ctx.getState();

    if (currentState.frontendSelectedSkill === undefined) {
      ctx.setState(produce(draft => {
        draft.frontendSelectedSkill = action.skill;
        draft.backendSelectedSkill = undefined;
        draft.systemsSelectedSkill = undefined;
      }));
      return;
    }
    if (currentState.frontendSelectedSkill.title === action.skill.title) {
      ctx.setState(produce(draft => {
        draft.frontendSelectedSkill = undefined;
      }));
      return;
    }

    ctx.setState(produce(draft => {
      draft.frontendSelectedSkill = action.skill;
      draft.backendSelectedSkill = undefined;
      draft.systemsSelectedSkill = undefined;
    }));
  }

  @Action(SelectBackendSkill)
  selectBackendSkill(ctx: StateContext<SkillsStateModel>, action: SelectBackendSkill) {
    const currentState = ctx.getState();

    if (currentState.backendSelectedSkill === undefined) {
      ctx.setState(produce(draft => {
        draft.backendSelectedSkill = action.skill;
        draft.frontendSelectedSkill = undefined;
        draft.systemsSelectedSkill = undefined;
      }));
      return;
    }
    if (currentState.backendSelectedSkill.title === action.skill.title) {
      ctx.setState(produce(draft => {
        draft.backendSelectedSkill = undefined;
      }));
      return;
    }

    ctx.setState(produce(draft => {
      draft.backendSelectedSkill = action.skill;
      draft.frontendSelectedSkill = undefined;
      draft.systemsSelectedSkill = undefined;
    }));
  }

  @Action(SelectSystemsSkill)
  selectSystemsSkill(ctx: StateContext<SkillsStateModel>, action: SelectSystemsSkill) {
    const currentState = ctx.getState();

    if (currentState.systemsSelectedSkill === undefined) {
      ctx.setState(produce(draft => {
        draft.systemsSelectedSkill = action.skill;
        draft.frontendSelectedSkill = undefined;
        draft.backendSelectedSkill = undefined;
      }));
      return;
    }
    if (currentState.systemsSelectedSkill.title === action.skill.title) {
      ctx.setState(produce(draft => {
        draft.systemsSelectedSkill = undefined;
      }));
      return;
    }

    ctx.setState(produce(draft => {
      draft.systemsSelectedSkill = action.skill;
      draft.frontendSelectedSkill = undefined;
      draft.backendSelectedSkill = undefined;
    }));
  }
}

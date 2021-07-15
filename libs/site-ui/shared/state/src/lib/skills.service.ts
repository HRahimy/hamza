import {Skill, skills} from "@hamza/site-ui/shared/models";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import produce from "immer";

export interface SkillsStateModel {
  skills: Skill[],
  selectedSkill?: Skill
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

    if (currentState.selectedSkill === undefined) {
      ctx.setState(produce(draft => {
        draft.selectedSkill = action.skill;
      }));
      return;
    }
    if (currentState.selectedSkill.title === action.skill.title) {
      ctx.setState(produce(draft => {
        draft.selectedSkill = undefined;
      }));
      return;
    }

    ctx.setState(produce(draft => {
      draft.selectedSkill = action.skill;
    }));
  }

  @Action(SelectBackendSkill)
  selectBackendSkill(ctx: StateContext<SkillsStateModel>, action: SelectBackendSkill) {
    const currentState = ctx.getState();

    if (currentState.selectedSkill === undefined) {
      ctx.setState(produce(draft => {
        draft.selectedSkill = action.skill;
      }));
      return;
    }
    if (currentState.selectedSkill.title === action.skill.title) {
      ctx.setState(produce(draft => {
        draft.selectedSkill = undefined;
      }));
      return;
    }

    ctx.setState(produce(draft => {
      draft.selectedSkill = action.skill;
    }));
  }

  @Action(SelectSystemsSkill)
  selectSystemsSkill(ctx: StateContext<SkillsStateModel>, action: SelectSystemsSkill) {
    const currentState = ctx.getState();

    if (currentState.selectedSkill === undefined) {
      ctx.setState(produce(draft => {
        draft.selectedSkill = action.skill;
      }));
      return;
    }
    if (currentState.selectedSkill.title === action.skill.title) {
      ctx.setState(produce(draft => {
        draft.selectedSkill = undefined;
      }));
      return;
    }

    ctx.setState(produce(draft => {
      draft.selectedSkill = action.skill;
    }));
  }
}

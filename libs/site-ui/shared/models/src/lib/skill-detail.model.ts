import {SkillType} from "./skill.type";

export interface Repo {
  title: string,
  description?: string,
}

export interface SkillDetailModel {
  type: SkillType,
  title: string,
  description: string,
  repos: Repo[],
}

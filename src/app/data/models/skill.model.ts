export interface Skill { readonly name: string; readonly icon?: string; }
export interface SkillCategory { readonly id: string; readonly label: string; readonly skills: readonly Skill[]; }

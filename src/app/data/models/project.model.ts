export type ProjectType = 'professional' | 'personal';

export interface Project {
  readonly name: string;
  readonly type: ProjectType;
  readonly context: string; // company / domain label
  readonly description: string;
  readonly stack: readonly string[];
  readonly role: string;
  readonly repoUrl?: string; // only for public (personal) projects
}

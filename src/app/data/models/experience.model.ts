export interface Experience {
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly current?: boolean;
  readonly summary: string;
  readonly responsibilities: readonly string[];
  readonly achievements: readonly string[];
  readonly stack: readonly string[];
}

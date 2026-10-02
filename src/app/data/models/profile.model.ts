export interface Education { readonly title: string; readonly institution: string; readonly year: string; readonly note: string; }
export interface Profile {
  readonly name: string;
  readonly title: string;
  readonly tagline: string;
  readonly summary: string;
  readonly email: string;
  readonly github: string;
  readonly linkedin: string; // leave '' until provided; UI hides empty links
  readonly location: string;
  readonly yearsOfExperience: number;
  readonly languages: readonly string[];
  readonly education: Education;
}

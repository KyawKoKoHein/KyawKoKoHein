import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tech-chip',
  template: `@if (icon()) { <img [src]="icon()" alt="" width="16" height="16" loading="lazy" /> }{{ label() }}`,
  styles: `
    :host { display: inline-flex; align-items: center; gap: .45rem; padding: .3rem .8rem; border-radius: var(--radius-pill);
      border: 1px solid var(--border); background: var(--surface); font: 500 .8rem var(--font-mono); color: var(--text-primary); }
    img { width: 16px; height: 16px; object-fit: contain; }`,
})
export class TechChip {
  readonly label = input.required<string>();
  readonly icon = input<string>();
}

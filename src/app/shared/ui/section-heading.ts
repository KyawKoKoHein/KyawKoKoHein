import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  template: `
    <header>
      <p class="eyebrow mono">{{ eyebrow() }}</p>
      <h2>{{ title() }}</h2>
      @if (subtitle()) { <p class="sub">{{ subtitle() }}</p> }
    </header>`,
  styles: `
    :host { display: block; margin-bottom: 3rem; }
    .eyebrow { display: flex; align-items: center; gap: .75rem; margin-bottom: .9rem; font-size: .8rem;
      letter-spacing: .14em; text-transform: uppercase; color: var(--accent); }
    .eyebrow::before { content: ''; width: 2rem; height: 2px; background: var(--gradient); }
    .sub { margin-top: 1rem; max-width: 60ch; color: var(--text-muted); }`,
})
export class SectionHeading {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
}

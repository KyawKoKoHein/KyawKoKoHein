import { Component, input } from '@angular/core';

@Component({
  selector: 'app-glass-card',
  template: `<ng-content />`,
  host: { '[class.interactive]': 'interactive()' },
  styles: `
    :host { display: block; padding: 1.75rem; border-radius: var(--radius); border: 1px solid var(--border);
      background: var(--surface); -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px);
      box-shadow: var(--shadow); transition: transform .35s var(--ease), border-color .35s, background .35s; }
    :host(.interactive):hover { transform: translateY(-4px); border-color: rgba(56, 189, 248, .45); background: var(--surface-hover); }`,
})
export class GlassCard {
  readonly interactive = input(false);
}

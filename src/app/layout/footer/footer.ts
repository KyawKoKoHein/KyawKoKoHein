import { Component } from '@angular/core';
import { PROFILE } from '../../data/content/profile';
import { NAV_LINKS } from '../../constants/nav-links';
import { Icon } from '../../shared/ui/icon';

@Component({
  selector: 'app-footer',
  imports: [Icon],
  template: `
    <footer>
      <div class="container inner">
        <p>© {{ year }} {{ p.name }}. All rights reserved.</p>
        <ul class="links" aria-label="Footer navigation">
          @for (l of nav; track l.id) { <li><a [href]="'#' + l.id">{{ l.label }}</a></li> }
        </ul>
        <div class="social">
          <a [href]="p.github" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><app-icon name="github" /></a>
          @if (p.linkedin) { <a [href]="p.linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><app-icon name="linkedin" /></a> }
          <a [href]="'mailto:' + p.email" aria-label="Email"><app-icon name="mail" /></a>
        </div>
      </div>
    </footer>`,
  styles: `
    footer { border-top: 1px solid var(--border); padding-block: 2rem; color: var(--text-muted); font-size: .9rem; }
    .inner { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1.25rem; }
    .links { display: flex; flex-wrap: wrap; gap: 1.25rem; }
    .links a, .social a { color: var(--text-muted); transition: color .2s; }
    .links a:hover, .social a:hover { color: var(--accent); }
    .social { display: flex; gap: 1rem; }`,
})
export class Footer {
  protected readonly p = PROFILE;
  protected readonly nav = NAV_LINKS;
  protected readonly year = new Date().getFullYear();
}

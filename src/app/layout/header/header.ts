import { Component, afterNextRender, inject, signal } from '@angular/core';
import { NAV_LINKS } from '../../constants/nav-links';
import { SITE_CONFIG } from '../../constants/site-config';
import { ScrollSpyService } from '../../core/services/scroll-spy.service';
import { Icon } from '../../shared/ui/icon';

@Component({
  selector: 'app-header',
  imports: [Icon],
  template: `
    <header class="hdr">
      <div class="container bar">
        <a class="brand mono" href="#home" aria-label="Kyaw Ko Ko Hein, home"><span class="text-gradient">&lt;K3H/&gt;</span></a>
        <button class="toggle" type="button" [attr.aria-expanded]="open()" aria-controls="primary-nav"
          aria-label="Toggle menu" (click)="open.set(!open())">
          <app-icon [name]="open() ? 'close' : 'menu'" [size]="24" />
        </button>
        <nav id="primary-nav" aria-label="Primary" [class.open]="open()">
          @for (l of links; track l.id) {
            <a [href]="'#' + l.id" [attr.aria-current]="spy.active() === l.id ? 'true' : null"
              [class.active]="spy.active() === l.id" (click)="open.set(false)">{{ l.label }}</a>
          }
          <a class="btn btn--primary cv" [href]="cv" download>
            <app-icon name="download" [size]="16" /> CV
          </a>
        </nav>
      </div>
    </header>`,
  styleUrl: './header.css',
})
export class Header {
  protected readonly spy = inject(ScrollSpyService);
  protected readonly links = NAV_LINKS;
  protected readonly cv = SITE_CONFIG.cvPath;
  protected readonly open = signal(false);

  constructor() {
    afterNextRender(() => this.spy.observe(this.links.map((l) => l.id)));
  }
}

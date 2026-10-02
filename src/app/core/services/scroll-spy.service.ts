import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/** Tracks which section is in the middle of the viewport (for nav highlighting). */
@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  readonly active = signal('home');

  observe(ids: readonly string[]): void {
    if (!this.isBrowser || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && this.active.set(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
  }
}

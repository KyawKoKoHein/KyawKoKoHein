import { Directive, ElementRef, afterNextRender, inject, input, numberAttribute } from '@angular/core';

/** Fade/slide-in on scroll. Usage: <div appReveal> or <div [appReveal]="120"> (delay in ms). */
@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal', '[style.transition-delay.ms]': 'delay()' },
})
export class Reveal {
  readonly delay = input(0, { alias: 'appReveal', transform: numberAttribute });

  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    afterNextRender(() => {
      if (typeof IntersectionObserver === 'undefined') { el.classList.add('is-visible'); return; }
      const io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { el.classList.add('is-visible'); io.disconnect(); }
      }, { threshold: 0.12 });
      io.observe(el);
    });
  }
}

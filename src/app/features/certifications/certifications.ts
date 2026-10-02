import { Component } from '@angular/core';
import { CERTIFICATIONS } from '../../data/content/certifications';
import { Reveal } from '../../shared/directives/reveal';
import { GlassCard } from '../../shared/ui/glass-card';
import { SectionHeading } from '../../shared/ui/section-heading';

@Component({
  selector: 'app-certifications',
  imports: [SectionHeading, GlassCard, Reveal],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class Certifications {
  protected readonly items = CERTIFICATIONS;
}

import { Component } from '@angular/core';
import { EXPERIENCE } from '../../data/content/experience';
import { Reveal } from '../../shared/directives/reveal';
import { GlassCard } from '../../shared/ui/glass-card';
import { SectionHeading } from '../../shared/ui/section-heading';
import { TechChip } from '../../shared/ui/tech-chip';

@Component({
  selector: 'app-experience',
  imports: [SectionHeading, GlassCard, TechChip, Reveal],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  protected readonly items = EXPERIENCE;
}

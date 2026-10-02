import { Component } from '@angular/core';
import { SKILL_CATEGORIES } from '../../data/content/skills';
import { Reveal } from '../../shared/directives/reveal';
import { GlassCard } from '../../shared/ui/glass-card';
import { SectionHeading } from '../../shared/ui/section-heading';
import { TechChip } from '../../shared/ui/tech-chip';

@Component({
  selector: 'app-skills',
  imports: [SectionHeading, GlassCard, TechChip, Reveal],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  protected readonly categories = SKILL_CATEGORIES;
}

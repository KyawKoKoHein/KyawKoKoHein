import { Component, computed, signal } from '@angular/core';
import { PROFILE } from '../../data/content/profile';
import { PROJECTS } from '../../data/content/projects';
import { Reveal } from '../../shared/directives/reveal';
import { GlassCard } from '../../shared/ui/glass-card';
import { Icon } from '../../shared/ui/icon';
import { SectionHeading } from '../../shared/ui/section-heading';
import { TechChip } from '../../shared/ui/tech-chip';

type Filter = 'all' | 'professional' | 'personal';

@Component({
  selector: 'app-projects',
  imports: [SectionHeading, GlassCard, TechChip, Icon, Reveal],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly githubUrl = `${PROFILE.github}?tab=repositories`;
  protected readonly active = signal<Filter>('all');
  protected readonly filters: readonly { id: Filter; label: string; count: number }[] = [
    { id: 'all', label: 'All', count: PROJECTS.length },
    { id: 'professional', label: 'Professional', count: PROJECTS.filter((p) => p.type === 'professional').length },
    { id: 'personal', label: 'Personal (GitHub)', count: PROJECTS.filter((p) => p.type === 'personal').length },
  ];
  protected readonly visible = computed(() =>
    this.active() === 'all' ? PROJECTS : PROJECTS.filter((p) => p.type === this.active()),
  );
}

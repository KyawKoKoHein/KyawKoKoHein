import { Component } from '@angular/core';
import { SITE_CONFIG } from '../../constants/site-config';
import { PROFILE } from '../../data/content/profile';
import { Reveal } from '../../shared/directives/reveal';
import { Icon } from '../../shared/ui/icon';
import { TechChip } from '../../shared/ui/tech-chip';

@Component({
  selector: 'app-hero',
  imports: [Icon, TechChip, Reveal],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly p = PROFILE;
  protected readonly cv = SITE_CONFIG.cvPath;
  protected readonly highlights = [
    { label: 'Java', icon: 'icons/tech/java.svg' },
    { label: 'Spring Boot', icon: 'icons/tech/spring-boot.svg' },
    { label: 'Angular', icon: 'icons/tech/angular.svg' },
  ];
}

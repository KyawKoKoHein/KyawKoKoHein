import { Component } from '@angular/core';
import { CERTIFICATIONS } from '../../data/content/certifications';
import { EXPERIENCE } from '../../data/content/experience';
import { PROFILE } from '../../data/content/profile';
import { Reveal } from '../../shared/directives/reveal';
import { GlassCard } from '../../shared/ui/glass-card';
import { SectionHeading } from '../../shared/ui/section-heading';

@Component({
  selector: 'app-about',
  imports: [SectionHeading, GlassCard, Reveal],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly p = PROFILE;
  protected readonly stats = [
    { value: `${PROFILE.yearsOfExperience}+`, label: 'Years of experience' },
    { value: `${EXPERIENCE.length}`, label: 'Companies' },
    { value: `${CERTIFICATIONS.length}`, label: 'Courses & certificates' },
  ];
  protected readonly strengths = [
    { title: 'Enterprise Banking', text: 'Core banking, mobile banking and gateway systems built for reliability.' },
    { title: 'API & Backend', text: 'RESTful APIs and backend services with Java and Spring Boot.' },
    { title: 'Production Support', text: 'Log analysis, root-cause investigation, deployment and maintenance.' },
    { title: 'Quality & Documentation', text: 'Design documents, unit testing, and careful review of test results.' },
  ];
}

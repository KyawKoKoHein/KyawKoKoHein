import { Component, inject } from '@angular/core';
import { SeoService } from './core/services/seo.service';
import { About } from './features/about/about';
import { Certifications } from './features/certifications/certifications';
import { Contact } from './features/contact/contact';
import { Experience } from './features/experience/experience';
import { Hero } from './features/hero/hero';
import { Projects } from './features/projects/projects';
import { Skills } from './features/skills/skills';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Hero, About, Experience, Skills, Projects, Certifications, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  constructor() {
    inject(SeoService).init();
  }
}

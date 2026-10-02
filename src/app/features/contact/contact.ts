import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService, SendResult } from '../../core/services/contact.service';
import { PROFILE } from '../../data/content/profile';
import { Reveal } from '../../shared/directives/reveal';
import { GlassCard } from '../../shared/ui/glass-card';
import { Icon } from '../../shared/ui/icon';
import { SectionHeading } from '../../shared/ui/section-heading';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, SectionHeading, GlassCard, Icon, Reveal],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private readonly contact = inject(ContactService);
  protected readonly p = PROFILE;
  protected readonly status = signal<'idle' | 'sending' | SendResult>('idle');

  protected readonly form = inject(FormBuilder).nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]],
    botcheck: [false], // honeypot: real visitors never see or tick it
  });

  protected invalid(name: 'name' | 'email' | 'message'): boolean {
    const c = this.form.controls[name];
    return c.invalid && (c.touched || c.dirty);
  }

  protected async submit(): Promise<void> {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    const { botcheck, ...msg } = this.form.getRawValue();
    if (botcheck) { this.status.set('sent'); return; }
    this.status.set('sending');
    const result = await this.contact.send(msg);
    this.status.set(result);
    if (result === 'sent') this.form.reset();
  }
}

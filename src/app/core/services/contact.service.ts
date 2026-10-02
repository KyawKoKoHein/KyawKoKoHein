import { Injectable } from '@angular/core';
import { SITE_CONFIG } from '../../constants/site-config';
import { PROFILE } from '../../data/content/profile';

export interface ContactMessage { name: string; email: string; message: string; }
export type SendResult = 'sent' | 'mailto' | 'error';

/**
 * Sends the contact form through Web3Forms (free, no backend needed on GitHub Pages).
 * While SITE_CONFIG.formAccessKey is empty it falls back to the visitor's email app.
 */
@Injectable({ providedIn: 'root' })
export class ContactService {
  async send(msg: ContactMessage): Promise<SendResult> {
    const key = SITE_CONFIG.formAccessKey;
    if (!key) {
      const subject = encodeURIComponent(`Portfolio message from ${msg.name}`);
      const body = encodeURIComponent(`${msg.message}\n\n${msg.name}\n${msg.email}`);
      window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
      return 'mailto';
    }
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: key, subject: `Portfolio message from ${msg.name}`, ...msg }),
      });
      const data = (await res.json()) as { success?: boolean };
      return data.success ? 'sent' : 'error';
    } catch {
      return 'error';
    }
  }
}

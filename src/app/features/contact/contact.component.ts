import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../core/http.service';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ContactComponent {
  contactForm: FormGroup;
  confirmationMessage = '';
  submitting = false;

  constructor(private fb: FormBuilder, private http: HttpService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      email: ['', [Validators.required, Validators.email, this.emailSafeValidator]],
      message: ['', [Validators.required, Validators.maxLength(200 * 6), this.wordCountValidator(200)]]
    });
  }

  emailSafeValidator(control: any) {
    const value = control.value || '';
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) {
      return { emailInvalid: true };
    }
    if (/<|>|script|onerror|onload|javascript:/i.test(value)) {
      return { emailUnsafe: true };
    }
    return null;
  }

  wordCountValidator(maxWords: number) {
    return (control: any) => {
      const value = control.value || '';
      const wordCount = value.trim().split(/\s+/).length;
      if (wordCount > maxWords) {
        return { wordCount: true };
      }
      return null;
    };
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.submitting = true;
    const { name, email, message } = this.contactForm.value;
    this.http.post('https://hook.us1.make.com/8gk54dmykb36k2a7xnknqvxxluilgy11', { name, email, message }).subscribe({
      next: (res) => {
        this.confirmationMessage = 'Thank you for connecting, will update soon.';
        this.contactForm.reset();
        this.submitting = false;
      },
      error: (err) => {
        this.confirmationMessage = 'There was an error sending your message. Please try again later.';
        this.submitting = false;
      }
    });
  }
}

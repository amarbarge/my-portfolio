import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserProfileService {
  getName(): string {
    return 'Amar Barge';
  }
  getTabLine(): string {
    return 'Full Stack Developer . Angular Enthusiast';
  }
}

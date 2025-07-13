import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Skill } from '../../../shared/skill';

@Injectable()
export class IntroductionService {
  private skillsUrl = 'docs/skills.json';

  constructor(private http: HttpClient) {}

  public getSkills(type: 'technicalSkills' | 'professionalSkills'): Observable<Skill[]> {
    return this.http.get<any>(this.skillsUrl).pipe(
      map(data => data[type] || [])
    );
  }
}

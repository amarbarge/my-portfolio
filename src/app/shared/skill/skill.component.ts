import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Skill } from './skill.model';

@Component({
  standalone: true,
  selector: 'app-skill',
  template: `
    <div class="skill__data">
      <div class="skill__names">
        <i [class]="skill?.icon + ' skill__icon'"></i>
        <span class="skill__name">{{ skill?.name }}</span>
      </div>
      <div class="skill__bar" [class]="skill?.barClass" style="width: {{ skill?.percentage }};"></div>
      <div>
        <span class="skill__percentage">{{ skill?.percentage }}</span>
      </div>
    </div>
  `,
  styleUrls: ['./skill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillComponent {
  @Input() skill: Skill | null = null;
}

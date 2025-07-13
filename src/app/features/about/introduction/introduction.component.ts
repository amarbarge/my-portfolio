import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { SkillComponent } from '../../../shared/skill/skill.component';
import { IntroductionService } from './introduction.service';
import { Skill } from '../../../shared/skill';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
  imports: [CommonModule, SkillComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroductionComponent {
  professionalSkills: Skill[] = [];
  technicalSkills: Skill[] = [];

  constructor(private introService: IntroductionService, private cd: ChangeDetectorRef) {
    // Initialization logic can go here if needed
  }

  ngOnInit() {
    // You can call introService methods here if needed
    this.introService.getSkills("technicalSkills").subscribe(skills => {
      console.log('Skills loaded:', skills);
      this.technicalSkills = skills;
      this.cd.detectChanges(); // Ensure change detection runs after loading skills
    });

    this.introService.getSkills("professionalSkills").subscribe(skills => {
      console.log('Professional Skills loaded:', skills);
      this.professionalSkills = skills;
      this.cd.detectChanges(); // Ensure change detection runs after loading skills
    });

  }
}

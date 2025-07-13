import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TimelineComponent } from '../../../shared/timeline/timeline.component';

@Component({
  standalone: true,
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  imports: [TimelineComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  timelineItems = [
    {
      title: "Master of Computer Applications (Coursework Completed)",
      date: "CGPA: 6.45",
      description: "Tharkur College of Engineering, University of Mumbai",
    },
    {
      title: "Bachelor in Computer Application",
      date: "Percentage: 65.64%",
      description: "Yashwantrao Chavan Maharashtra Open University, Nashik",
    },
    {
      title: "Diploma in Computer Application Technology",
      date: "Percentage: 83.68%",
      description: "Garware Institute of Career Education and Development, Mumbai"
    }
  ];
  constructor() {

  }
}

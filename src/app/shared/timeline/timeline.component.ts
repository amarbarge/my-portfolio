import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TimelineItem {
  title: string;
  subtitle?: string;
  description?: string;
  date?: string;
  iconClass?: string; // e.g. 'bx bxl-angular'
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="timeline">
      <div class="timeline-item" *ngFor="let item of items">
        <div class="timeline-icon" *ngIf="item.iconClass">
          <i [class]="item.iconClass"></i>
        </div>
        <div class="timeline-content">
          <div class="timeline-header">
            <span class="timeline-title">{{ item.title }}</span>
            <span class="timeline-date" *ngIf="item.date">{{ item.date }}</span>
          </div>
          <div class="timeline-subtitle" *ngIf="item.subtitle">{{ item.subtitle }}</div>
          <div class="timeline-description" *ngIf="item.description" [innerHTML]="item.description"></div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  @Input() items: TimelineItem[] = [];
}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TimelineComponent } from '../../../shared/timeline/timeline.component';

@Component({
  standalone: true,
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  imports: [TimelineComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  timelineItems: any[] = [];
  constructor() {
    // Initialization logic can go here if needed
    this.timelineItems = [
      { 
        title: 'Engineering Manager',
        date: 'June 2019 – Present',
        subtitle: 'GEP Solutions Pvt. Ltd., Navi Mumbai',
        description: `
          <ul>
            <li>Led architecture and delivery of SaaS modules: Analytics, Manufacturing Visibility, Should Cost, and Order Collaboration.</li>
            <li>Improved critical operation performance from 5 minutes to 10 seconds.</li>
            <li>Defined product roadmap and assessed technical feasibility.</li>
            <li>Onboarded 30+ suppliers within a month during new module launches.</li>
            <li>Built and mentored a team of 4–6 engineers.</li>
            <li>Integrated CI/CD pipelines with DevOps.</li>
            <li>Conducted code reviews and knowledge-sharing sessions on Angular, .NET, Camunda.</li>
            <li>Recognized with Achievers Award and multiple Team Awards.</li>
          </ul>
        `,
      },
      {
        title: 'Senior Software Developer',
        date: 'January 2018 - June 2019',
        subtitle: 'Eyvo eProcurement Pvt. Ltd., Andheri, Mumbai',
        description: `
          <ul>
            <li>Developed CRM systems for customer onboarding on the eBuyerAssist platform using Angular and Web API.</li>
            <li>Ensured GDPR compliance through process design and implementation.</li>
            <li>Integrated third-party APIs (ADFS, Mailgun, 2FA).</li>
            <li>Managed task assignments via TFS Kanban workflows.</li>
            <li>Optimized Angular components to improve application responsiveness.</li>
            <li>Awarded Employee of the Quarter for delivery excellence.</li>
            <li>Led collaboration with product managers and QA teams to refine requirements.</li>
            <li>Documented compliance processes and technical integration guides.</li>
          </ul>
        `,
      },
      {
        title: 'Senior Software Developer',
        date: 'December 2015 - January 2018',
        subtitle: 'Edenred India Pvt. Ltd., Thane, Mumbai',
        description: `
          <ul>
            <li>Developed MiND application to manage card product lifecycle.</li>
            <li>Delivered India and Japan region platforms including Ticket Online.</li>
            <li>Built modules using MVC, Web API, and Entity Framework.</li>
            <li>Received Team Applause and Individual Performance Awards.</li>
          </ul>
        `,
      },
      {
        title: 'Team Lead',
        date: 'September 2012 - December 2015',
        subtitle: 'Proton Infosolutions Pvt. Ltd., Andheri, Mumbai',
        description: `
          <ul>
            <li>Managed project delivery and mentored new team members.</li>
            <li>Designed architecture and implemented features using Web API and MVC.</li>
            <li>Delivered modules for 4+ clients, including Election Management System for KPMG.</li>
          </ul>
        `,
      }
    ];
  }
}

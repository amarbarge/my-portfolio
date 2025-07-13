import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { IntroductionService } from './introduction/introduction.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { IntroductionComponent } from './introduction/introduction.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    IntroductionComponent,
    ExperienceComponent,
    EducationComponent,
    RouterModule.forChild([
      {
        path: '',
        component: AboutComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'introduction',
          },
        ],
      },
    ]),
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    IntroductionService
  ],
})
export class AboutModule {}

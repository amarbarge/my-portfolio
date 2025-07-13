import { Component, ChangeDetectionStrategy, Injector, Type } from '@angular/core';
import { MenuService } from '../../shared/menu.service';
import { IntroductionComponent } from './introduction/introduction.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  selectedTab: any;
currentComponent: Type<any>|null;

  constructor(private injector: Injector, private menuService: MenuService) {
    // menuService.setMenu(injector.get<Menu[]>(MENU_TOKEN, []).flat());
    this.selectedTab = 'skills'; // Default selected tab
    this.currentComponent = IntroductionComponent;
  }

  ngOnInit() {
    // Any additional initialization logic can go here
  }

  selectTab(tab: string) {
    this.selectedTab = tab;

    switch (tab) {
      case 'introduction':
        this.currentComponent = IntroductionComponent;
        break;
      case 'education':
        const { EducationComponent } = require('./education/education.component');
        this.currentComponent = EducationComponent;
        break;
      case 'experience':
        const { ExperienceComponent } = require('./experience/experience.component');
        this.currentComponent = ExperienceComponent;
        break;
      default:
        this.currentComponent = IntroductionComponent;
    }
  }
}

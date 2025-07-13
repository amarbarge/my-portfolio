import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  declarations: [CardComponent, LoadingSpinnerComponent],
  imports: [CommonModule, SkillComponent],
  exports: [CardComponent, LoadingSpinnerComponent, SkillComponent]
})
export class SharedModule {}

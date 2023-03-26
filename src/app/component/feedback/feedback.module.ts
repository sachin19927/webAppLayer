import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeebackpageComponent } from './feebackpage/feebackpage.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { QueryPageComponent } from './query-page/query-page.component';
import { PreviewPageComponent } from './preview-page/preview-page.component';



@NgModule({
  declarations: [
    FeebackpageComponent,
    PersonalDetailsComponent,
    QueryPageComponent,
    PreviewPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeedbackModule { }

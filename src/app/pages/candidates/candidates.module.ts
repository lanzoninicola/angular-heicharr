import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CoreModule } from 'src/app/core/core.module';
import { DynamicFormModule } from 'src/app/dynamic-form/dynamic-form.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableDataModule } from 'src/app/table-data/table-data.module';

import { CandidateContactFormComponent } from './components/candidate-edit/candidate-contact-form/candidate-contact-form.component';
import { CandidateEditComponent } from './components/candidate-edit/candidate-edit.component';
import { CandidateIdBadgeComponent } from './components/candidate-id-badge/candidate-id-badge.component';
import { CandidatesListComponent } from './components/candidates-list/candidates-list.component';
import { CandidatesSectionComponent } from './components/candidates-section/candidates-section.component';
import { CandidatesRoutingModule } from './routing/candidates-routing.module';

@NgModule({
  declarations: [
    CandidatesSectionComponent,
    CandidatesListComponent,
    CandidateEditComponent,
    CandidateContactFormComponent,
    CandidateIdBadgeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    CandidatesRoutingModule,
    DynamicFormModule,
    MatButtonModule,
    TableDataModule,
  ],
  exports: [CandidateContactFormComponent, CandidateIdBadgeComponent],
})
export class CandidatesModule {}

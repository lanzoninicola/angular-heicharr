import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SectionToolbarComponent } from './components/section-toolbar/section-toolbar.component';

@NgModule({
  declarations: [SectionToolbarComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
  exports: [SectionToolbarComponent],
})
export class SharedModule {}

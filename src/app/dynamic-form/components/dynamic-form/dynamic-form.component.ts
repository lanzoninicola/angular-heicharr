import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormSettings } from '../../types/template.types';

@Component({
  selector: 'ahr-dynamic-form',
  template: `
    <form [formGroup]="model">
      <ahr-loading-spinner *ngIf="showSpinner"></ahr-loading-spinner>
      <div *ngFor="let groupConfig of formSettings | keyvalue">
        <ahr-dynamic-form-group [viewConfig]="groupConfig">
        </ahr-dynamic-form-group>
      </div>
    </form>
  `,
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @Input()
  model: FormGroup;

  @Input('settings')
  formSettings: FormSettings;

  @Input()
  showSpinner: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}

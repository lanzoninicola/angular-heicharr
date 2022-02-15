import { Injectable } from '@angular/core';

import { FormGroupConfiguration } from '../types/dynamic-form.types';
import { FormControlConfig } from '../types/form-control.types';
import { FormViewTemplate } from '../types/template.types';

@Injectable({
  providedIn: 'root',
})
export class FormViewBuilderService {
  _template: FormViewTemplate = new Map();

  constructor() {}

  get(): FormViewTemplate {
    return this._template;
  }

  /**
   * @description
   * Set up the template adding form groups
   *
   */
  build(group: FormGroupConfiguration, controls: FormControlConfig[]) {
    this._template.set(group, controls);
  }

  /**
   * @description
   * This checks if the template is empty
   *
   */
  shouldEmpty(): boolean {
    if (this._template.size === 0) {
      return true;
    }

    return false;
  }

  /**
   * @description
   * This remove the template when the component is destroyed
   *
   */
  destroy(): void {
    for (const [key] of this._template) {
      this._template.delete(key);
    }
  }
}

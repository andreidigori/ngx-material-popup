import { ValidatorFn } from '@angular/forms';
import { PopupConfig } from './popup.config';

export interface PromptPopupInput {
  initialValue?: any;
  inputType?: string;
  label?: string;
  multiline?: boolean;
  placeholder?: string;
  validators?: ValidatorFn | ValidatorFn[];
}

export interface PromptPopupConfig extends PopupConfig {
  cancelButton?: string;
  inputs?: PromptPopupInput | PromptPopupInput[];
}

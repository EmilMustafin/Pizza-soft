import type { IInputProps } from './model/newTypes.ts';
import { InputCheckbox } from './ui/input-checkbox/input-checkbox.tsx';
import { InputDate } from './ui/input-date/input-date.tsx';
import { InputTel } from './ui/input-tel/input-tel.tsx';
import { InputText } from './ui/input-text/input-text.tsx';

export const Input: IInputProps = {
  Text: InputText,
  Checkbox: InputCheckbox,
  Date: InputDate,
  Tel: InputTel,
};

InputText.displayName = 'Input.Text';
InputCheckbox.displayName = 'Input.Checkbox';
InputDate.displayName = 'Input.Date';
InputTel.displayName = 'Input.Tel';

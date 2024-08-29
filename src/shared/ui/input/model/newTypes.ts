import { InputCheckbox } from '../ui/input-checkbox/input-checkbox';
import { InputDate } from '../ui/input-date/input-date';
import { InputTel } from '../ui/input-tel/input-tel';
import { InputText } from '../ui/input-text/input-text';

export interface IInputProps {
  Text: typeof InputText;
  Checkbox: typeof InputCheckbox;
  Date: typeof InputDate;
  Tel: typeof InputTel;
}

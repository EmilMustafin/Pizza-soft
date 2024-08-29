import { IInputTextProps } from '../input-text/types';

export interface IInputDateProps extends Omit<IInputTextProps, 'value'> {
  value?: string;
}

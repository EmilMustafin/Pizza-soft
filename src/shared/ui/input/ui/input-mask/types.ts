import { IInputBaseProps } from '../input-base/types';

export interface IInputMaskProps extends IInputBaseProps {
  chars?: RegExp;
  mask?: string;
}

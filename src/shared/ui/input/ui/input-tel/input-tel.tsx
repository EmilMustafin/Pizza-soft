import { forwardRef } from 'react';
import type { IInputEmailProps } from './types.ts';
import { InputText } from '../input-text/input-text.tsx';

export const InputTel = forwardRef<HTMLInputElement, IInputEmailProps>((props, ref) => (
  <InputText type={'tel'} ref={ref} chars={/\d/} {...props} />
));

InputTel.displayName = 'InputTel';

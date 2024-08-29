import { forwardRef } from 'react';
import { IInputMaskProps } from './types';
import { applyMask } from './utils';
import { InputBase } from '../input-base/input-base';

export const InputMask = forwardRef<HTMLInputElement, IInputMaskProps>((props, ref) => {
  const { mask, chars, value, ...rest } = props;

  const clearValue = () => {
    if (!chars) return value;
    const str = String(value ?? '');
    return str.match(new RegExp(chars, 'g'))?.join('') ?? '';
  };

  const getValue = () => {
    const clearedValue = clearValue();
    if (!mask) return clearedValue;
    return applyMask(mask, String(clearedValue));
  };

  return <InputBase ref={ref} value={getValue()} {...rest} />;
});

InputMask.displayName = 'InputMask';

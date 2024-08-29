import { forwardRef } from 'react';
import styles from './input-base.module.scss';
import { IInputBaseProps } from './types';

export const InputBase = forwardRef<HTMLInputElement, IInputBaseProps>((props, ref) => {
  const { dataTestId = 'inputBase', ...rest } = props;
  return <input ref={ref} className={styles.InputBase} data-testid={dataTestId} {...rest} />;
});

InputBase.displayName = 'InputBase';

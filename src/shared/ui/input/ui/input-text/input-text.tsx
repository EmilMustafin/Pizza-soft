import { ChangeEvent, forwardRef, useRef, useState } from 'react';
import classNames from 'classnames';
import { useCombinedRef } from '@/shared/lib/useCombinedRef.ts';
import styles from './input-text.module.scss';
import { IInputTextProps } from './types.ts';
import { InputMask } from '../input-mask/input-mask.tsx';

export const InputText = forwardRef<HTMLInputElement, IInputTextProps>((props, refProp) => {
  const {
    size = 'm',
    label,
    placeholder,
    contentLeft,
    contentRight,
    value: valueProp,
    defaultValue,
    onChange: onChangeProp,
    isError,
    className,
    required,
    white = false,
    ...rest
  } = props;

  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState(valueProp || defaultValue || '');

  const ref = useRef<HTMLInputElement>(null);

  const classes = classNames(
    styles.inputText,
    styles['size-' + size],
    focus && styles.focus,
    isError && styles.isError,
    white && styles.white,
    className,
  );

  const onClick = () => {
    !focus && setFocus(true);
    ref.current?.focus();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChangeProp?.(e);
  };

  const onFocus = () => setFocus(true);
  const onBlur = () => setFocus(false);
  return (
    <div className={classes} {...{ onClick, onFocus, onBlur }}>
      {contentLeft}
      <div className={classNames(styles.body, label && styles.label, value && styles.value)}>
        {label && <label className={required ? styles.required : ''}>{label}</label>}
        <InputMask
          value={valueProp ?? value}
          {...{ onChange, placeholder, ...rest }}
          ref={useCombinedRef(ref, refProp)}
        />
      </div>
      {contentRight}
    </div>
  );
});

InputText.displayName = 'InputText';

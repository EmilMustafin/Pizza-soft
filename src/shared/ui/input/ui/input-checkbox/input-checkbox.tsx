import { ChangeEvent, forwardRef, useEffect, useId, useState } from 'react';
import { Icons } from '@/shared/assets';
import styles from './input-checkbox.module.scss';
import { IInputCheckboxProps } from './types';
import { Icon } from '../../../icon';
import { InputBase } from '../input-base/input-base';

export const InputCheckbox = forwardRef<HTMLInputElement, IInputCheckboxProps>((props, ref) => {
  const { width, height, type, checked: checkedProp, onChange: onChangeProp, ...rest } = props;

  const isCheckedProp = typeof checkedProp === 'boolean';
  const id = useId();

  const [checked, setChecked] = useState(isCheckedProp ? checkedProp : false);

  useEffect(() => {
    setChecked(checkedProp || false);
  }, [checkedProp]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    setChecked(newChecked);
    onChangeProp?.(e);
  };

  const getIcon = () => {
    const isActive = isCheckedProp ? checkedProp : checked;

    if (type === 'radio')
      return (
        <Icon
          icon={Icons.CHECKBOX_ACTIVE}
          width={width ? String(width) : '16px'}
          height={height ? String(height) : '16px'}
        />
      );

    return <Icon icon={isActive ? Icons.CHECKBOX_ACTIVE : Icons.CHECKBOX} />;
  };

  return (
    <>
      <InputBase
        id={id}
        ref={ref}
        onChange={onChange}
        checked={isCheckedProp ? checkedProp : checked}
        hidden
        type='checkbox'
        {...rest}
      />
      <label htmlFor={id} className={styles.label} onClick={() => setChecked(!checked)}>
        {getIcon()}
      </label>
    </>
  );
});

InputCheckbox.displayName = 'InputCheckbox';

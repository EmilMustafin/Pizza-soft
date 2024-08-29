import { ChangeEvent, useState, forwardRef } from 'react';
import styles from './input-date.module.scss';
import { IInputDateProps } from './types';
import { dateToString, stringToDate } from './utils';
import { InputText } from '../input-text/input-text';

export const InputDate = forwardRef<HTMLInputElement, IInputDateProps>((props, ref) => {
  const { value: valueProp, onChange: onChangeProp, ...rest } = props;

  const [date, setDate] = useState<string>(
    dateToString(stringToDate(valueProp || '') || new Date()),
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, '');
    let formattedValue = rawValue;
    if (rawValue.length > 2) {
      formattedValue = `${rawValue.slice(0, 2)}.${rawValue.slice(2)}`;
    }
    if (rawValue.length > 4) {
      formattedValue = `${rawValue.slice(0, 2)}.${rawValue.slice(2, 4)}.${rawValue.slice(4, 8)}`;
    }

    if (formattedValue) {
      setDate(formattedValue);
      onChangeProp?.(e);
    } else {
      setDate(date.slice(0, -1));
    }
  };

  return (
    <div className={styles.inputDate}>
      <InputText ref={ref} value={date} onChange={onChange} {...rest} />
    </div>
  );
});

InputDate.displayName = 'InputDate';

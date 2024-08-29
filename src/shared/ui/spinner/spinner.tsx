import { FC } from 'react';
import styles from './spinner.module.css';
import { Icon } from '../icon';
import { Icons } from '../../assets/icons';

interface ISpinner {
  width?: string;
  height?: string;
}

export const Spinner: FC<ISpinner> = ({ width = '50px', height = '50px' }) => {
  return (
    <div className={styles.spinnerContainer}>
      <Icon icon={Icons.SPINNER} width={width} height={height} />
    </div>
  );
};

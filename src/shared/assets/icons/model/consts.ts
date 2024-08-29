import Calendar from '../common/calendar.svg';
import CheckBoxActive from '../common/checkbox-active.svg';
import CheckBox from '../common/checkbox.svg';
import Spinner from '../common/spinner.svg';
export enum Icons {
  SPINNER = 'SPINNER',
  CALENDAR = 'CALENDAR',
  CHECKBOX = 'CHECKBOX',
  CHECKBOX_ACTIVE = 'CHECKBOX_ACTIVE',
}

export const ICONS: Record<Icons, SVGIcon> = {
  [Icons.SPINNER]: Spinner,
  [Icons.CALENDAR]: Calendar,
  [Icons.CHECKBOX]: CheckBox,
  [Icons.CHECKBOX_ACTIVE]: CheckBoxActive,
};

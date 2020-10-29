import momentJalaali from 'moment-jalaali';
import style from './style.min.css';
import Calendar from './components/DatePicker';

momentJalaali.loadPersian({ dialect: 'persian-modern' });

export default Calendar;

/* packages:
 *   classnames
 *   react-onclickoutside
 *   react-tether
 *   moment-range
 *   rc-trigger
 */

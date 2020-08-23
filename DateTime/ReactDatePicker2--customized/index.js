import withStyles from 'isomorphic-style-loader/lib/withStyles';
import style from './style.min.css';
import momentJalaali from 'moment-jalaali';
import Calendar from './components/DatePicker';

momentJalaali.loadPersian({ dialect: 'persian-modern' });

export default withStyles(style)(Calendar);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import momentJalaali from 'moment-jalaali';
import TetherComponent from 'react-tether';
import classnames from 'classnames';
import Calendar from './Calendar';
import MyTimePicker from './CustomTimePicker';

const outsideClickIgnoreClass = 'ignore--click--outside';

export default class DatePicker extends Component {
  static propTypes = {
    value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    defaultValue: PropTypes.object,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    children: PropTypes.node,
    min: PropTypes.object,
    max: PropTypes.object,
    defaultMonth: PropTypes.object,
    inputFormat: PropTypes.string,
    inputJalaaliFormat: PropTypes.string,
    removable: PropTypes.bool,
    styles: PropTypes.object,
    calendarStyles: PropTypes.object,
    calendarContainerProps: PropTypes.object,
    isGregorian: PropTypes.bool, // jalaali or gregorian
    timePicker: PropTypes.bool,
    calendarClass: PropTypes.string,
    datePickerClass: PropTypes.string,
    tetherAttachment: PropTypes.string,
    inputReadOnly: PropTypes.bool,
    ranges: PropTypes.array,
    showToggleButton: PropTypes.bool,
    toggleButtonText: PropTypes.any,
    showTodayButton: PropTypes.bool,
    placeholder: PropTypes.string
  };

  static defaultProps = {
    styles: undefined,
    calendarContainerProps: {},
    isGregorian: true,
    timePicker: true,
    showTodayButton: true,
    placeholder: ''
  };

  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();

    this.state = {
      isOpen: false,
      momentValue: this.props.defaultValue || null,
      inputValue: this.getValue(
        this.props.defaultValue,
        this.props.isGregorian,
        this.props.timePicker
      ),
      inputJalaaliFormat:
        this.props.inputJalaaliFormat || this.getInputFormat(false, this.props.timePicker),
      inputFormat: this.props.inputFormat || this.getInputFormat(true, this.props.timePicker),
      isGregorian: this.props.isGregorian,
      timePicker: this.props.timePicker,
      timePickerComponent: this.props.timePicker ? MyTimePicker : undefined
    };
  }

  getInputFormat(isGregorian, timePicker) {
    if (timePicker) return isGregorian ? 'YYYY/M/D hh:mm A' : 'jYYYY/jM/jD hh:mm A';
    return isGregorian ? 'YYYY/M/D' : 'jYYYY/jM/jD';
  }

  getValue(inputValue, isGregorian, timePicker) {
    if (!inputValue) return '';
    let { inputFormat } = this.state;
    let { inputJalaaliFormat } = this.state;
    if (!inputFormat) inputFormat = this.getInputFormat(isGregorian, timePicker);
    if (!inputJalaaliFormat) inputJalaaliFormat = this.getInputFormat(isGregorian, timePicker);

    return isGregorian
      ? inputValue.locale('es').format(inputFormat)
      : inputValue.locale('fa').format(inputJalaaliFormat);
  }

  setOpen = isOpen => {
    this.setState({ isOpen });

    if (this.props.onOpen) {
      this.props.onOpen(isOpen);
    }
  };

  UNSAFE_componentWillMount() {
    if (this.props.value) {
      this.setMomentValue(this.props.value);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if ('value' in nextProps && nextProps.value !== this.props.value) {
      this.setMomentValue(nextProps.value);
    }

    if ('isGregorian' in nextProps && nextProps.isGregorian !== this.props.isGregorian) {
      const { inputFormat: nextPropsInputFormat } = nextProps;
      const { inputJalaaliFormat: nextPropsInputJalaaliFormat } = nextProps;

      this.setState({
        isGregorian: nextProps.isGregorian,
        inputValue: this.getValue(nextProps.value, nextProps.isGregorian, nextProps.timePicker),
        inputFormat: nextPropsInputFormat || this.state.inputFormat,
        inputJalaaliFormat: nextPropsInputJalaaliFormat || this.state.inputJalaaliFormat
      });
    }

    if ('timePicker' in nextProps && nextProps.timePicker !== this.props.timePicker) {
      this.setState({
        timePicker: nextProps.timePicker,
        timePickerComponent: this.props.timePicker ? MyTimePicker : undefined
      });
    }
  }

  toggleMode = () => {
    const isGregorian = !this.state.isGregorian;
    const { inputFormat: nextPropsInputFormat } = this.props;
    const { inputJalaaliFormat: nextPropsInputJalaaliFormat } = this.props;
    this.setState({
      isGregorian: isGregorian,
      inputValue: this.getValue(this.props.value, isGregorian, this.props.timePicker)
    });
  };

  setMomentValue(momentValue) {
    const { inputFormat, isGregorian, timePicker } = this.state;

    if (this.props.onChange) {
      this.props.onChange(momentValue);
    }

    const inputValue = this.getValue(momentValue, isGregorian, timePicker);

    this.setState({ momentValue, inputValue });
  }

  handleFocus = () => {
    this.setOpen(true);
  };

  handleClickOutsideCalendar() {
    this.setOpen(false);
  }

  toEnglishDigits(str) {
    if (!str) return str;
    const regex1 = /[\u0660-\u0669]/g;
    const regex2 = /[\u06f0-\u06f9]/g;
    return str
      .replace(regex1, function(c) {
        return c.charCodeAt(0) - 0x0660;
      })
      .replace(regex2, function(c) {
        return c.charCodeAt(0) - 0x06f0;
      });
  }

  toPersianDigits(str) {
    if (!str) return str;
    const regex = /[0-9]/g;
    const id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return str.replace(regex, function(w) {
      return id[+w];
    });
  }

  handleSelectDay(selectedDay) {
    const { momentValue: oldValue } = this.state;
    let momentValue = selectedDay.clone();

    if (oldValue) {
      momentValue = momentValue.set({
        hour: oldValue.hours(),
        minute: oldValue.minutes(),
        second: oldValue.seconds()
      });
    }
    this.setOpen(false);
    this.setMomentValue(momentValue);
  }

  handleInputChange(event) {
    const { inputFormat, inputJalaaliFormat, isGregorian } = this.state;
    const inputValue = this.toEnglishDigits(event.target.value);
    const currentInputFormat = isGregorian ? inputFormat : inputJalaaliFormat;

    const momentValue = momentJalaali(inputValue, currentInputFormat);

    if (momentValue.isValid()) {
      this.setState({ momentValue });
    }

    const isUserClearInput = inputValue === '';

    if (this.props.onChange) {
      if (isUserClearInput) {
        this.props.onChange('');
      }
    }

    this.setState({ inputValue });
  }

  handleInputClick() {
    if (!this.props.disabled) {
      this.setOpen(true);
    }
  }

  renderInput = ref => {
    const { isOpen, inputValue, isGregorian } = this.state;

    const className = classnames(this.props.className, {
      [outsideClickIgnoreClass]: isOpen
    });

    return (
      <div ref={ref}>
        <input
          placeholder={this.props.placeholder}
          className={`datepicker-input ${className}`}
          type="text"
          ref={inst => {
            this.input = inst;
          }}
          onFocus={this.handleFocus.bind(this)}
          onChange={this.handleInputChange.bind(this)}
          onClick={this.handleInputClick.bind(this)}
          value={isGregorian ? inputValue : this.toPersianDigits(inputValue)}
          readOnly={this.props.inputReadOnly === true}
          disabled={this.props.disabled}
        />
      </div>
    );
  };

  renderCalendar = () => {
    const { momentValue, isGregorian, timePickerComponent: TimePicker } = this.state;
    const { onChange, min, max, defaultMonth, styles, calendarContainerProps, ranges } = this.props;

    return (
      <Calendar
        toggleMode={this.toggleMode}
        ranges={ranges}
        min={min}
        max={max}
        selectedDay={momentValue}
        defaultMonth={defaultMonth}
        onSelect={this.handleSelectDay.bind(this)}
        onClickOutside={this.handleClickOutsideCalendar.bind(this)}
        outsideClickIgnoreClass={outsideClickIgnoreClass}
        styles={styles}
        containerProps={calendarContainerProps}
        isGregorian={isGregorian}
        calendarClass={this.props.calendarClass ? this.props.calendarClass : ''}
        showToggleButton={this.props.showToggleButton}
        toggleButtonText={this.props.toggleButtonText}
        showTodayButton={this.props.showTodayButton}
        timePicker={
          TimePicker ? (
            <TimePicker
              outsideClickIgnoreClass={outsideClickIgnoreClass}
              isGregorian={isGregorian}
              min={min}
              max={max}
              momentValue={momentValue}
              setMomentValue={this.setMomentValue.bind(this)}
            />
          ) : null
        }
      />
    );
  };

  removeDate() {
    const { onChange } = this.props;
    if (onChange) {
      onChange('');
    }
    this.setState({
      input: '',
      inputValue: ''
    });
  }

  render() {
    return this.renderCalendar();
  }
}

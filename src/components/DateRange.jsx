import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';
import 'bootstrap-daterangepicker/daterangepicker.css';

const styles = () => ({
  dateRange: {
    width: '100%'
  },
  dateText: {
    textAlign: 'center',
    width: '95%',
    border: '1px solid #ccc',
    borderRadius: '6px',
    cursor: 'pointer'
  }
});

const ranges = {
  Lifetime: [
    moment()
      .year('2016')
      .startOf('year'),
    moment()
  ],
  Today: [moment().startOf('day'), moment().endOf('day')],
  Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
  'Last 7 Days': [moment().subtract(6, 'days'), moment()],
  'This Month': [moment().startOf('month'), moment().endOf('month')],
  'Last Month': [
    moment()
      .subtract(1, 'month')
      .startOf('month'),
    moment()
      .subtract(1, 'month')
      .endOf('month')
  ]
};

function DateRange(props) {
  const { classes, startDate, endDate, changeDateRange } = props;

  return (
    <DateRangePicker
      containerClass={classes.dateRange}
      startDate={startDate}
      endDate={endDate}
      ranges={ranges}
      onApply={(e, picker) => changeDateRange(picker.startDate, picker.endDate)}
    >
      <input
        className={classes.dateText}
        value={`${startDate.format('MM/DD/YYYY')} - ${endDate.format(
          'MM/DD/YYYY'
        )}`}
        disabled
      />
    </DateRangePicker>
  );
}

DateRange.propTypes = {
  classes: PropTypes.shape({
    dateRange: PropTypes.string.isRequired,
    dateText: PropTypes.string.isRequired
  }).isRequired,
  startDate: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  endDate: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  changeDateRange: PropTypes.func.isRequired
};

export default withStyles(styles)(DateRange);

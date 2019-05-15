import moment from 'moment';

const timeSince = date => {
  const seconds = Math.ceil((moment(new Date()) - moment(date)) / 1000);

  let interval = Math.ceil(seconds / 3600);
  if (interval > 1 && interval <= 23) {
    return `${interval} hours ago`;
  }
  if (interval > 23 && interval <= 47) {
    return 'yesterday';
  }
  if (interval > 47) {
    return moment(date).format('MMM DD, YYYY');
  }

  interval = Math.ceil(seconds / 60);
  if (interval > 1) {
    return `${interval} minutes ago`;
  }
  return `${Math.ceil(seconds)} seconds ago`;
};

export default timeSince;

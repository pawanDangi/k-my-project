import snackbar from './snackbar';

const copyToClipboard = text => {
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  snackbar({
    variant: 'success',
    message: 'URL is copied to clipboard.'
  });
};

export default copyToClipboard;

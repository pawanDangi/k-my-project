export const dateFormat = 'YYYY-MM-DD';

export const dateTimeFormat = 'YYYY-MM-DD HH:mm:ss';

export const capitalizeFirstLetter = string => {
  if (string) {
    return (
      string.charAt(0).toUpperCase() + [string.slice(1) || ' '].toLowerCase
    );
  }
  return string;
};

const getCookies = () => {
  const cookies = document.cookie.split(';');
  const all = {};
  let string = '';
  cookies.forEach(c => {
    string = c;
    while (c.charAt(0) === ' ') {
      string = c.string(1);
    }
    const substring = string.split('=') || [];
    if (substring.length === 2) {
      const key = substring[0];
      const value = substring[1];
      all[key] = value;
    }
  });
  return all;
};

export default getCookies;

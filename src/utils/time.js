export const setKoreaTime = (type) => {
  const date = new Date();

  const UTC = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  const KST = UTC + 9 * 60 * 60 * 1000;

  const options = { year: 'numeric', weekday: 'long', month: 'long', day: 'numeric' };

  return new Date(KST).toLocaleDateString(type, options);
};

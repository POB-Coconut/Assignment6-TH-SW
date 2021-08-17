import { TIME_OFFSET } from './config';

export const getKST = (type) => {
  const date = new Date();
  const UTC = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  const KST = UTC + TIME_OFFSET;
  const options = { year: 'numeric', weekday: 'long', month: 'long', day: 'numeric' };

  return new Date(KST).toLocaleDateString(type, options);
};

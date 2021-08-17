export const validateInput = (value) => {
  const matches = value.match(regex);

  if (matches === null) return false;
  else if (matches[0] !== value) return false;
  else return true;
};

const regex = /([0-9]+,){1,}([0-9+]+)/;

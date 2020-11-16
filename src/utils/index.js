export const removeTags = (str) => {
  if (!str) {
    return '';
  }
  const regex = /(<([^>]+)>)/gi;
  return str.replace(regex, '');
};

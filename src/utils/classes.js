const classes = (...arr) => {
  if (!arr.length) return '';
  return arr
    .filter((cls) => !!cls)
    .map((cls) => cls.trim())
    .join(' ');
};

export default classes;

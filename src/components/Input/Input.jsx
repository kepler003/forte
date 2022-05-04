const Input = ({ label, error, ...props }) => {
  return (
    <>
      {label && <label>{label}</label>}
      <input {...props} />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
